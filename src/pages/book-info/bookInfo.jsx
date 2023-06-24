import Layout from '../../components/core/layout/Layout';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useServiceEvent } from '../../hooks/book-info/book-info.hook';
import { useShoppingCartEvent } from '../../hooks/shopping-cart/shopping-cart.hook';
import './bookInfo.scss';
import {RestAdapter} from "../../infrastructure/adapters/rest/rest.adapter.js";



const BookInfo = () => {

    const { getPageInfo } = useServiceEvent();
    const { setListBooksInfo, getListBooksInfo } = useShoppingCartEvent();
    const navigate = useNavigate();

    const infoBook = getPageInfo();
    const books = Object.values(getListBooksInfo());

    const addShoppingBook = (bookInfo) => {
        if(books.filter(value => value.isbn == bookInfo.isbn).length === 0) {
            books.push(bookInfo)
            setListBooksInfo(books);
        }
        navigate('/shopping-card');
    }

    return (
        <>
            <Layout>
                <section>
                    <h2>Información General </h2>
                    <Row>
                        <Col xs={12} md={4}>
                            <Image className='book-img' src={infoBook.urlImagen} rounded />
                        </Col>
                        <Col xs={12} md={8}>
                            <Table striped bordered hover responsive>
                                <tbody>
                                    <tr>
                                        <td>Título</td>
                                        <td>{infoBook.titulo}</td>
                                    </tr>
                                    <tr>
                                        <td>Solicítelo como</td>
                                        <td>{infoBook.id}</td>
                                    </tr>
                                    <tr>
                                        <td>ISBN</td>
                                        <td>{infoBook.isbn}</td>
                                    </tr>
                                    <tr>
                                        <td >Autor</td>
                                        <td>{infoBook.autor}</td>
                                    </tr>
                                    <tr>
                                        <td>Categoria</td>
                                        <td>{infoBook.categoria}</td>
                                    </tr>
                                    <tr>
                                        <td>Resumen</td>
                                        <td>{infoBook.descripcion}</td>
                                    </tr>
                                    <tr>
                                        <td >Existencias</td>
                                        <td>{ infoBook.cantidad }</td>
                                    </tr>
                                    <tr>
                                        <td>Precio</td>
                                        <td>$ {infoBook.precio}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button variant="primary" size="lg" onClick={() => addShoppingBook(infoBook)}>
                                Agregar al carrito
                            </Button>
                        </Col>
                    </Row>
                </section>
            </Layout>

        </>
    );
};

export default BookInfo;
