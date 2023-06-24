import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const createShoppingCartState = createSlice({
  name: 'ShoppingCartState',
  initialState,
  reducers: {
    setBookListSelected(state, { payload }) {
      return payload;
    }
  }
});

export const useBookListSelected = createShoppingCartState.actions.setBookListSelected;
export const useBookListSelector = (state)=> {
  return state.shoppingCartState;
};
