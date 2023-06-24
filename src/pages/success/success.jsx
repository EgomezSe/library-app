import Layout from '../../components/core/layout/Layout';
import MyCarousel from '../../components/core/carousel/Carousel';
import CarouselCard from '../../components/core/carousel-card/CarouselCard';
import './success.scss';




const Succes = () => {


    return (
        <>
            <Layout>
                <div className="success-container">
                    <div className="card-success">
                        <div className="card-success__content">
                            <i className="checkmark">✓</i>
                        </div>
                        <h1 className="success-title">¡Compra exitosa!</h1>
                        <p>Te invitamos a seguir comprando en nuestra tienda virtual.</p>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Succes;
