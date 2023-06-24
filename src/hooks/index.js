import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBookInfoState } from './book-info/book-info.store';
import {createShoppingCartState} from './shopping-cart/shopping-cart.store';
import {createBooksListInfoState} from './books-list/books-list.store.js';

const appReducer = combineReducers({
    bookInfoState: createBookInfoState.reducer,
    shoppingCartState: createShoppingCartState.reducer,
    booksListInfoState: createBooksListInfoState.reducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export default store;
