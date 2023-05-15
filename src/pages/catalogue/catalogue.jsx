import React, { useEffect, useState } from 'react';
import Layout from '../../components/core/layout/Layout';
import InputSearch from '../../components/core/input-search/InputSearch';
import BookGroup from '../../components/core/book-group/BookGroup';
import { CatalogueObject } from '../../assets/json/catalogue';
import './catalogue.scss';



const Catalogue = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        //Simulación de un llamado api de prueba
        console.log('respuesta de api prueba', res);
        setBooks(CatalogueObject)
      })
  }, []);

  const bookFilter = (event) => {
    console.log('este es el libro que se va filtrar ', event);
  }

  return (
    <>
      <Layout>
        <section>
          <InputSearch onBookFilter={(event) => bookFilter(event)} />
          <h2>Todos los libros</h2>
          <p>Obtén acceso ilimitado a cientos de miles de libros. Lee y escucha mediante un dispositivo móvil o tableta. Prueba gratuita durante 30 días. Puedes cancelar en cualquier momento.</p>
          <BookGroup value={books} />
        </section>
      </Layout>

    </>
  );
};

export default Catalogue;
