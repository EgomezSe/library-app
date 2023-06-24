import { useDispatch, useSelector } from 'react-redux';
import { useBookListSelected, useBookListSelector } from './shopping-cart.store';

export const useShoppingCartEvent = ()  => {
  const dispatch = useDispatch();

  const getListBooksInfo = () => {
    const booksInfo = useSelector(useBookListSelector);
    return booksInfo;
  };

  const setListBooksInfo =  (booksInfo) => {
    dispatch(useBookListSelected(booksInfo));
  };

  return { getListBooksInfo, setListBooksInfo };
};
