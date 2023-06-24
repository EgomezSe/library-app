import Layout from '../../components/core/layout/Layout';
import BookGroup from '../../components/core/book-group/BookGroup';
import InputSearch from '../../components/core/input-search/InputSearch';
import { ScienceObject } from '../../assets/json/science';
import './science.scss'
import {useBooksListEvent} from "../../hooks/books-list/books-list.hook.js";
import {useEffect, useState} from "react";
import {SearchService} from "../../infrastructure/services/booksService.js";
import Alert from 'react-bootstrap/Alert';
import React from "react";





const Science = () => {

    const { getBooksListInfo } = useBooksListEvent();
    const [books, setBooks] = useState([]);
    const [show, setShow] = useState(false);


    const scienceBooks = Object.values(getBooksListInfo()).filter( book => book.categoria === 'Ciencia');

    useEffect(() => {
        setBooks(scienceBooks)
    }, []);

    const bookFilter = async (event) => {
        const booksList = await SearchService(event, 'ciencia');
        setShow(booksList.length === 0 );
        setBooks(booksList);
    }

    return (
        <>
            <Layout>
                <section>
                    <h2>Biblioteca</h2>
                    <p>Obtén acceso ilimitado a cientos de miles de libros. Lee y escucha mediante un dispositivo móvil o tableta. Prueba gratuita durante 30 días. Puedes cancelar en cualquier momento.</p>
                    <div className="video">
                        <iframe className="video__iframe" src="https://www.youtube.com/embed/vOX-Tj6iIaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </section>
                <section>
                    <h2>Libros cientificos</h2>
                    <InputSearch onBookFilter={bookFilter}/>
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

export default Science;
