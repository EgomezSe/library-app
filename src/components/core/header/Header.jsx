import { useEffect } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { useBookListEvent } from '../../../store/shopping-cart/shopping-cart.hook';

const Header = () => {

    const navigate = useNavigate();
    const { getListBooksInfo } = useBookListEvent();
    const booksNumber = Object.values(getListBooksInfo()).length;



    useEffect(() => {
        //setPageInfo();
    }, [])


    const sendEvenNavigate = (root) => {
        navigate(root);
    };

    return (
        <>

            <div className='header-content'>
                <div className='header-content__logo'></div>
                <h2 className='header-content__title'>library</h2>
            </div>
            <div className='header-content__menu'>
                <div className='grid'>
                    <div className='grid__two'><button className='header-button' onClick={() => sendEvenNavigate('/')}><i className='large material-icons'>home</i></button></div>
                    <div className='grid__three'><button className='header-button' onClick={() => sendEvenNavigate('/second')}>Catálogo</button></div>
                    <div className='grid__four'><button className='header-button' onClick={() => sendEvenNavigate('/infantile')}>Infantil</button></div>
                    <div className='grid__five'><button className='header-button' onClick={() => sendEvenNavigate('/science')}>Ciencia</button></div>
                    <div className='grid__six'><button className='header-button' onClick={() => sendEvenNavigate('/shopping-card')}>{booksNumber}<i className='large material-icons'>shopping_cart</i></button></div>
                </div>
            </div>

        </>
    );
};

export default Header;
