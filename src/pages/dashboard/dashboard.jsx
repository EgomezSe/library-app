import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/core/layout/Layout';
import MyCarousel from '../../components/core/carousel/Carousel';
import CarouselCard from '../../components/core/carousel-card/CarouselCard';
import { NewsBooksObject } from '../../assets/json/newsBooks';



const Dashboard = () => {

    const novedades = NewsBooksObject;


    return (
        <>
            <Layout>
                <section>
                    <h2>Biblioteca</h2>
                    <MyCarousel value={[
                        { img: 'https://concepto.de/wp-content/uploads/2015/03/biblioteca-2-e1550106475617.jpg', title: 'proe', subtitle: 'sadas' },
                        { img: 'https://img.europapress.es/fotoweb/fotonoticia_20171227133829_1200.jpg', title: 'proe', subtitle: 'sadas' },
                        { img: 'https://enfermeria.fcm.unc.edu.ar/wp-content/uploads/sites/15/2019/11/Biblioteca1-1024x576.jpg', title: 'proe', subtitle: 'sadas' }
                    ]}>
                    </MyCarousel>
                </section>
                <section>
                    <h2>Novedades</h2>
                    <CarouselCard value={novedades}>
                    </CarouselCard>
                </section>
            </Layout>

        </>
    );
};

export default Dashboard;
