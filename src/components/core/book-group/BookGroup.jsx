import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useServiceEvent } from '../../../store/book-info/book-info.hook';
import { useBookListEvent } from '../../../store/shopping-cart/shopping-cart.hook';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './BookGroup.scss'


const BookGroup = ({ value }) => {

    const { setPageInfo } = useServiceEvent();
    const { setListBooksInfo, getListBooksInfo } = useBookListEvent();
    const navigate = useNavigate();
    const books = Object.values(getListBooksInfo());




    const sendEvenNavigate = (root, infoBook) => {
        setPageInfo(infoBook);
        navigate(root);
    };

    const addShoppingBook = (bookInfo) => {
        books.push(bookInfo)
        setListBooksInfo(books);
    }

    const viewCards = (cards) => {
        const cardItems = [];
        cards.forEach((element, index) => {
            cardItems.push(
                <li className='book-group__item' key={index}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='img-height' variant="top" src={element.img} />
                        <Card.Body>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text>
                                {element.subtitle}
                            </Card.Text>
                            <Card.Title>{`$ ${element.cost}`}</Card.Title>
                            <Button variant="primary" onClick={() => sendEvenNavigate('/book-info', element)}>ver mas</Button>
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
