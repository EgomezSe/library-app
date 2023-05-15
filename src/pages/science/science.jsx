import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/core/layout/Layout';
import BookGroup from '../../components/core/book-group/BookGroup';
import InputSearch from '../../components/core/input-search/InputSearch';
import { ScienceObject } from '../../assets/json/science';
import './science.scss'





const Science = () => {

    const bookFilter = (event) => {
        console.log('este es el libro que se va filtrar ', event);
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
                    <BookGroup value={ScienceObject} />

                </section>
            </Layout>

        </>
    );
};

export default Science;
