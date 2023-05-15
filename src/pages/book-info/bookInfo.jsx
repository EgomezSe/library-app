import Layout from '../../components/core/layout/Layout';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useServiceEvent } from '../../store/book-info/book-info.hook';
import { useBookListEvent } from '../../store/shopping-cart/shopping-cart.hook';
import './bookInfo.scss';



const BookInfo = () => {

    const { getPageInfo } = useServiceEvent();
    const { setListBooksInfo, getListBooksInfo } = useBookListEvent();
    const navigate = useNavigate();

    const infoBook = getPageInfo();
    const books = Object.values(getListBooksInfo());
    console.log('infoBook', infoBook);

    

    const addShoppingBook = (bookInfo) => {
        books.push(bookInfo)
        setListBooksInfo(books);
        navigate('/shopping-card');
    }

    console.log('infoBook 2', infoBook);

    return (
        <>
            <Layout>
                <section>
                    <h2>Información General </h2>
                    <Row>
                        <Col xs={12} md={4}>
                            <Image className='book-img' src={infoBook.img} rounded />
                        </Col>
                        <Col xs={12} md={8}>
                            <Table striped bordered hover responsive>
                                <tbody>
                                    <tr>
                                        <td>Solicítelo como</td>
                                        <td>{infoBook.additionalInfo.code}</td>

                                    </tr>
                                    <tr>
                                        <td>ISBN</td>
                                        <td>{infoBook.additionalInfo.isbn}</td>

                                    </tr>
                                    <tr>
                                        <td >Autor</td>
                                        <td>{infoBook.additionalInfo.author}</td>

                                    </tr>
                                    <tr>
                                        <td>Título</td>
                                        <td>{infoBook.title}</td>

                                    </tr>
                                    <tr>
                                        <td>Edición</td>
                                        <td>{infoBook.additionalInfo.edition}</td>

                                    </tr>
                                    <tr>
                                        <td >Descr. Física</td>
                                        <td>{infoBook.additionalInfo.physicalDesc}</td>

                                    </tr>
                                    <tr>
                                        <td>Resumen</td>
                                        <td>{infoBook.additionalInfo.summary}</td>

                                    </tr>
                                    <tr>
                                        <td>Cod. Idioma</td>
                                        <td>{infoBook.additionalInfo.codLanguage}</td>

                                    </tr>
                                    <tr>
                                        <td >Existencias</td>
                                        <td>{infoBook.additionalInfo.stock}</td>
                                    </tr>
                                    <tr>
                                        <td >Costo</td>
                                        <td>$ {infoBook.cost}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button variant="primary" size="lg" onClick={() => addShoppingBook(infoBook)}>
                                Agregar al carrito
                            </Button>
                        </Col>
                    </Row>
                </section>
            </Layout>

        </>
    );
};

export default BookInfo;
