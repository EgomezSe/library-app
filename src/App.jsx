import  {Fragment} from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Catalogue from './pages/catalogue/catalogue';
import Infantile from './pages/infantile/infantile';
import Science from './pages/science/science';
import BookInfo from './pages/book-info/bookInfo';
import ShoppingCard from './pages/shopping-cart/shoppingCart';


const App = () => {

  return (
    <>
         <Fragment>
            <HashRouter basename="/">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/second" element={<Catalogue />} />
                    <Route path="/infantile" element={<Infantile />} />
                    <Route path="/science" element={<Science />} />
                    <Route path='/book-info' element={<BookInfo/>}></Route>
                    <Route path='/shopping-card' element={<ShoppingCard/>}></Route>
                </Routes>
            </HashRouter>
        </Fragment>
      
    </>
  );
};

export default App;
