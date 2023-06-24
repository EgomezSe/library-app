import { useEffect, useState } from 'react';
import { useShoppingCartEvent } from '../../hooks/shopping-cart/shopping-cart.hook';
import Layout from '../../components/core/layout/Layout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import './shoppingCart.scss';
import {ShoppingService} from "../../infrastructure/services/shoppingService.js";
import {useNavigate} from "react-router-dom";
import {useBooksListEvent} from "../../hooks/books-list/books-list.hook.js";


const ShoppingCard = () => {



    const { getListBooksInfo, setListBooksInfo } = useShoppingCartEvent();
    const {setBooksListInfo} = useBooksListEvent();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const booksList = Object.values(getListBooksInfo());

    let totalCost = 0;

    useEffect(() => {
        if(booksList.length === 0) {
            setShow(true);
        }
    }, []);

    const deleteBook = (index) => {
        booksList.splice(index, 1);
        setListBooksInfo(booksList);
    }

    const shoppingBooks = async () => {
        ShoppingService(totalCost, booksList).then( (response) => {
            setBooksListInfo().then();
            setListBooksInfo([]);
            navigate('/success');
        }).catch( error => {
            navigate('/error');
        });
    }


    const viewShoppingCart = () => {
        const items = [];
        booksList.forEach((element, index) => {
            totalCost += element.precio;
            items.push(
                <Card className='shopping-cart'>
                    <Card.Body>
                        <Row>
                            <Col xs={12} md={3} lg={2}>
                                <Image className='shopping-img' src={element.urlImagen} rounded />
                            </Col>
                            <Col xs={12} md={9} lg={10}>
                                <Card.Title>{element.titulo} </Card.Title>
                                <Card.Text>
                                    {element.descripcion}
                                </Card.Text>
                                <Card.Title>
                                    $ {element.precio}
                                </Card.Title>
                                <Button variant="danger" onClick={() => deleteBook(index)} >Eliminar <i className='small material-icons'>remove_shopping_cart</i></Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            )
        });
        return items;
    }

    return (
        <>
            <Layout>
                <section>
                    <h2>Biblioteca</h2>

                    {viewShoppingCart()}
                </section>
                { show ?
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>¡No tienes Libros en tu carrito de compras!</Alert.Heading>
                    <p>
                        Si deseas puedes añadir ejemplares y proceder a realizar el pago.
                    </p>
                    </Alert> : <></>
                }
                <section className='pay'>
                    <p className='pay__margin'>Total compra</p>
                    <h4 className='pay__margin' >$ {totalCost}</h4>
                    <Button variant="primary pay__margin" size="lg" onClick={() => shoppingBooks()}>Pagar <i className='medium material-icons'>payment</i></Button>
                </section>
            </Layout>

        </>
    );
};

export default ShoppingCard;
