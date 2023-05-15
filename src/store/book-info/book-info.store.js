import { createSlice } from '@reduxjs/toolkit';

const initialState = {test: 'inicio'};

export const createBookInfoState = createSlice({
  name: 'BookInfoState',
  initialState,
  reducers: {
    setBookInfoSelected(state, { payload }) {
      Object.assign(state, payload);
    }
  }
});

export const useBookInfoSelected = createBookInfoState.actions.setBookInfoSelected;
export const useBookInfoSelector = (state)=> {
  return state.bookInfoState;
};
