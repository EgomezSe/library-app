import { useDispatch, useSelector } from 'react-redux';
import { useBooksListInfoSelected, useBooksListInfoSelector } from './books-list.store.js';
import {RestAdapter} from "../../infrastructure/adapters/rest/rest.adapter.js";

export const useBooksListEvent = ()  => {


  const dispatch = useDispatch();

  const getBooksListInfo = () => {
    const booksList = useSelector(useBooksListInfoSelector);
    return booksList;
  };

  const setBooksListInfo = async () => {
    const booksList = await RestAdapter().get('https://cloudgateway-production.up.railway.app/srv-buscador/libros');
    dispatch(useBooksListInfoSelected(booksList));
  };

  return { getBooksListInfo, setBooksListInfo };
};
