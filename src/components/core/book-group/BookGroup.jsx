import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useServiceEvent } from '../../../hooks/book-info/book-info.hook';
import { useShoppingCartEvent } from '../../../hooks/shopping-cart/shopping-cart.hook';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './BookGroup.scss'
import {useEffect, useState} from "react";


const BookGroup = ({ value }) => {

    const { setPageInfo } = useServiceEvent();
    const { setListBooksInfo, getListBooksInfo } = useShoppingCartEvent();
    const navigate = useNavigate();
    const books = Object.values(getListBooksInfo());

    const [bookIsAdded, setBookIsAdded] = useState([]);

    useEffect(() => {
        setBookIsAdded(false);
    }, []);



    const sendEvenNavigate = (root, infoBook) => {
        setPageInfo(infoBook);
        navigate(root);
    };

    const addShoppingBook = (bookInfo) => {
        if(books.filter(value => value.isbn == bookInfo.isbn).length > 0) {
            setBookIsAdded(true);
        } else {
            setBookIsAdded(false);
            books.push(bookInfo)
            setListBooksInfo(books);
        }
    }

    const viewCards = (cards) => {
        const cardItems = [];
        cards.forEach((element, index) => {
            cardItems.push(
                <li className='book-group__item' key={index}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='img-height' variant="top" src={element.urlImagen} />
                        <Card.Body>
                            <Card.Title>{element.titulo}</Card.Title>
                            <Card.Text>
                                {element.descripcion.substr(0, 80)} ...
                            </Card.Text>
                            <Card.Title>{`$ ${element.precio}`}</Card.Title>
                            <Button variant="primary" onClick={() => sendEvenNavigate('/book-info', element)}>ver más</Button>
                            <OverlayTrigger
                                trigger="click"
                                key={index}
                                placement='top'
                                overlay={
                                    <Popover className={bookIsAdded ? 'propover-error': 'propover'} id={`popover-positioned-${index}`}>
                                        <Popover.Body>
                                            <strong>{bookIsAdded ? 'Ya tienes el libro agregado al carrito de compras': 'Se agrego al carrito de compras'} <i className='small material-icons'>shopping_cart</i></strong>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Button className='button-card' variant="secondary" onClick={() => addShoppingBook(element)}><i className='medium material-icons'>add_shopping_cart</i></Button>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>
                </li>
            )
        });
        return cardItems;
    }
    return (
        <>
            <div className='book-container'>
                <ul className='book-group'>
                    {viewCards(value)}
                </ul>
            </div>
        </>
    );
};

BookGroup.propTypes = {
    value: PropTypes.array.isRequired
}

export default BookGroup;
