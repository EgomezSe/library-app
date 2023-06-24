import Layout from '../../components/core/layout/Layout';
import MyCarousel from '../../components/core/carousel/Carousel';
import BookGroup from '../../components/core/book-group/BookGroup';
import InputSearch from '../../components/core/input-search/InputSearch';
import {useBooksListEvent} from "../../hooks/books-list/books-list.hook.js";
import {useEffect, useState} from "react";
import {SearchService} from "../../infrastructure/services/booksService.js";
import Alert from 'react-bootstrap/Alert';
import React from "react";




const Infantile = () => {

    const { getBooksListInfo } = useBooksListEvent();
    const [books, setBooks] = useState([]);
    const [show, setShow] = useState(false);


    const infantileBooks = Object.values(getBooksListInfo()).filter( book => book.categoria === 'Infantil');

    useEffect(() => {
        setBooks(infantileBooks)
    }, []);

    const bookFilter = async (event) => {
        const booksList = await SearchService(event, 'infantil');
        setShow(booksList.length === 0 );
        setBooks(booksList);
    }

    return (
        <>
            <Layout>
                <section>
                    <h2>Biblioteca</h2>
                    <p>Obtén acceso ilimitado a cientos de miles de libros. Lee y escucha mediante un dispositivo móvil o tableta. Prueba gratuita durante 30 días. Puedes cancelar en cualquier momento.</p>
                    <MyCarousel value={[{ img: 'https://mejorconsalud.as.com/wp-content/uploads/2018/06/beneficios-lectura-ninos.jpg', title: 'proe', subtitle: 'sadas' }, { img: 'https://img.europapress.es/fotoweb/fotonoticia_20171227133829_1200.jpg', title: 'proe', subtitle: 'sadas' }, { img: 'https://blog.pearsonlatam.com/hubfs/Importancia-lecuta-ni%C3%B1os-temprana-edad.jpg', title: 'proe', subtitle: 'sadas' }]}></MyCarousel>
                </section>
                <section>
                    <h2>Libros para niños</h2>
                    <InputSearch onBookFilter={bookFilter} />
                    {show ?
                        <Alert key='danger' variant='danger' onClose={() => setShow(false)} dismissible>
                            No se encontraron libros, por favor intenta con otra palabra clave.
                        </Alert> : <></>
                    }
                    <BookGroup value={books} />

                </section>
            </Layout>

        </>
    );
};

export default Infantile;
