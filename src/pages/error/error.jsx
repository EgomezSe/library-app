import Layout from '../../components/core/layout/Layout';
import './error.scss';




const Error = () => {
    return (
        <>
            <Layout>
                <div className="error-container">
                    <div className="card-error">
                        <div className="card-error__content">
                            <i className="checkmark-error">:(</i>
                        </div>
                        <h1 className="error-title">¡No se pudo realizar la compra!</h1>
                        <p>Te invitamos a seguir intentando en nuestra tienda virtual.</p>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Error;
