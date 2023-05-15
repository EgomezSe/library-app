import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBookInfoState } from './book-info/book-info.store';
import { createBookListState } from './shopping-cart/shopping-cart.store';

const appReducer = combineReducers({
  bookInfoState: createBookInfoState.reducer,
  bookListState: createBookListState.reducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export default store;
