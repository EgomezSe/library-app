import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/core/layout/Layout';
import MyCarousel from '../../components/core/carousel/Carousel';
import BookGroup from '../../components/core/book-group/BookGroup';
import InputSearch from '../../components/core/input-search/InputSearch';
import { InfantileObject } from '../../assets/json/infantile';




const Infantile = () => {

    const bookFilter = (event) => {
        console.log('este es el libro que se va filtrar ', event);
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
                    <BookGroup value={InfantileObject} />

                </section>
            </Layout>

        </>
    );
};

export default Infantile;
