import { Route, Routes, HashRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard.jsx";
import Catalogue from "../pages/catalogue/catalogue.jsx";
import Infantile from "../pages/infantile/infantile.jsx";
import Science from "../pages/science/science.jsx";
import BookInfo from "../pages/book-info/bookInfo.jsx";
import ShoppingCard from "../pages/shopping-cart/shoppingCart.jsx";
import Success from "../pages/success/success.jsx";
import Error from "../pages/error/error.jsx";

export const LibraryRouter = () => {
    return (
            <HashRouter basename="/">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/second" element={<Catalogue />} />
                    <Route path="/infantile" element={<Infantile />} />
                    <Route path="/science" element={<Science />} />
                    <Route path='/book-info' element={<BookInfo/>}></Route>
                    <Route path='/shopping-card' element={<ShoppingCard/>}></Route>
                    <Route path='/success' element={<Success/>}></Route>
                    <Route path='/error' element={<Error/>}></Route>
                </Routes>
            </HashRouter>
    );
};
