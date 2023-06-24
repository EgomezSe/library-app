import React, { useEffect, useState } from 'react';
import Layout from '../../components/core/layout/Layout';
import InputSearch from '../../components/core/input-search/InputSearch';
import BookGroup from '../../components/core/book-group/BookGroup';
import Alert from 'react-bootstrap/Alert';
import './catalogue.scss';
import {useBooksListEvent} from "../../hooks/books-list/books-list.hook.js";
import {SearchService} from "../../infrastructure/services/booksService.js";



const Catalogue = () => {

  const [books, setBooks] = useState([]);
  const [show, setShow] = useState(false);

  const { getBooksListInfo } = useBooksListEvent();
  const generalBooks = Object.values(getBooksListInfo()).filter( book => book.categoria === 'General');

  useEffect(() => {
      setBooks(generalBooks)
  }, []);

  const bookFilter = async (event) => {
    const booksList = await SearchService(event);
    setShow(booksList.length === 0 );
    setBooks(booksList);
  }

  return (
    <>
      <Layout>
        <section>
          <InputSearch onBookFilter={bookFilter} />
          {show ?
              <Alert key='danger' variant='danger' onClose={() => setShow(false)} dismissible>
                No se encontraron libros, por favor intenta con otra palabra clave.
              </Alert> : <></>
          }
          <h2>Todos los libros</h2>
          <p>Obtén acceso ilimitado a cientos de miles de libros. Lee y escucha mediante un dispositivo móvil o tableta. Prueba gratuita durante 30 días. Puedes cancelar en cualquier momento.</p>
          <BookGroup value={books} />
        </section>
      </Layout>

    </>
  );
};

export default Catalogue;
