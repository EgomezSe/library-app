import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookListEvent } from '../../store/shopping-cart/shopping-cart.hook';
import Layout from '../../components/core/layout/Layout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './shoppingCart.scss';


const ShoppingCard = () => {



    const { getListBooksInfo, setListBooksInfo } = useBookListEvent();

    const prueba = Object.values(getListBooksInfo());

    let totalCost = 0;

    useEffect(() => {
    }, []);

    const deleteBook = (index) => {
        prueba.splice(index, 1);
        setListBooksInfo(prueba);
    }

    const viewShoppingCart = () => {
        const items = [];
        prueba.forEach((element, index) => {
            totalCost += element.cost;
            items.push(
                <Card className='shopping-cart'>
                    <Card.Body>
                        <Row>
                            <Col xs={12} md={3} lg={2}>
                                <Image className='shopping-img' src={element.img} rounded />
                            </Col>
                            <Col xs={12} md={9} lg={10}>
                                <Card.Title>{element.title} </Card.Title>
                                <Card.Text>
                                    {element.subtitle}
                                </Card.Text>
                                <Card.Title>
                                    $ {element.cost}
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
                <section className='pay'>
                    <p className='pay__margin'>Total compra</p>
                    <h4 className='pay__margin' >$ {totalCost}</h4>
                    <Button variant="primary pay__margin" size="lg">Pagar <i className='medium material-icons'>payment</i></Button>
                </section>
            </Layout>

        </>
    );
};

export default ShoppingCard;
