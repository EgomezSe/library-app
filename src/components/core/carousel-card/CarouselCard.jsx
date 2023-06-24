import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useServiceEvent } from '../../../hooks/book-info/book-info.hook';
import { useShoppingCartEvent } from '../../../hooks/shopping-cart/shopping-cart.hook';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './CarouselCard.scss';


function CarouselCard({ value }) {

    const navigate = useNavigate();
    const { setPageInfo } = useServiceEvent();
    const { setListBooksInfo, getListBooksInfo } = useShoppingCartEvent();

    const books = Object.values(getListBooksInfo());

    useEffect(() => {
        //setPageInfo();
    }, [])

const sendEvenNavigate = (root, bookInfo) => {
    setPageInfo(bookInfo);
    navigate(root);
};

const addShoppingBook = (bookInfo) => {
    books.push(bookInfo)
    setListBooksInfo(books);
}

const viewCards = (cardsInfo) => {
    const cardItems = [];
    cardsInfo.forEach((element, index) => {
        cardItems.push(
            <div className='card-container__slider__card' key={index}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='img-height' variant="top" src={element.urlImagen} />
                    <Card.Body>
                        <Card.Title>{element.titulo}</Card.Title>
                        <Card.Text>
                            {element.descripcion.substr(0, 100)} ...
                        </Card.Text>
                        <Card.Title>{`$ ${element.precio}`}</Card.Title>
                        <Button variant="primary" onClick={() => sendEvenNavigate('/book-info', element)}>ver más</Button>
                        <OverlayTrigger
                                trigger="click"
                                key={index}
                                placement='top'
                                overlay={
                                    <Popover className='propover' id={`popover-positioned-${index}`}>
                                        <Popover.Body>
                                            <strong>Se agrego al carrito de compras <i className='small material-icons'>shopping_cart</i></strong>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Button className='button-card' variant="secondary" onClick={() => addShoppingBook(element)}><i className='medium material-icons'>add_shopping_cart</i></Button>
                            </OverlayTrigger>
                            </Card.Body>
                </Card>
            </div>
        )

    });
    return cardItems;
}
    return (
        <>
            <div className='card-container'>
                <div className='card-container__slider'>
                    {viewCards(value)}
                </div>
            </div>
        </>
    );
}

CarouselCard.propTypes = {
    value: PropTypes.array.isRequired
}

export default CarouselCard;
