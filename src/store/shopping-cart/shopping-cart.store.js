import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const createBookListState = createSlice({
  name: 'BookListState',
  initialState,
  reducers: {
    setBookListSelected(state, { payload }) {
      console.log('el payload', payload);
      return payload;
    }
  }
});

export const useBookListSelected = createBookListState.actions.setBookListSelected;
export const useBookListSelector = (state)=> {
  return state.bookListState;
};
