import Header from '../header/Header';
import './Layout.scss'

const Layout = ({ children }) => {


  return (
    <>
      <Header/>
      <div className="contend">
        <div className="contend__body">{children}</div>
      </div>
    </>
  );
};

export default Layout;
