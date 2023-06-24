import { createSlice } from '@reduxjs/toolkit';

const initialState = {test: 'inicio'};

export const createBooksListInfoState = createSlice({
  name: 'BooksListInfoState',
  initialState,
  reducers: {
    setBooksListInfoSelected(state, { payload }) {
      return payload;
    }
  }
});

export const useBooksListInfoSelected = createBooksListInfoState.actions.setBooksListInfoSelected;
export const useBooksListInfoSelector = (state)=> {
  return state.booksListInfoState;
};
