import { useDispatch, useSelector } from 'react-redux';
import { useBookInfoSelected, useBookInfoSelector } from './book-info.store';
import {RestAdapter} from "../../infrastructure/adapters/rest/rest.adapter.js";

export const useServiceEvent = ()  => {


  const dispatch = useDispatch();

  const getPageInfo = () => {
    const pageInfo = useSelector(useBookInfoSelector);
    return pageInfo;
  };

  const setPageInfo = async (bookInfo) => {
    dispatch(useBookInfoSelected(bookInfo));
  };

  return { getPageInfo, setPageInfo };
};
