import { useDispatch, useSelector } from 'react-redux';
import { useBookInfoSelected, useBookInfoSelector } from './book-info.store';

export const useServiceEvent = ()  => {


  const dispatch = useDispatch();

  const getPageInfo = () => {
    const pageInfo = useSelector(useBookInfoSelector);
    return pageInfo;
  };

  const setPageInfo = async (pageInfo) => {
    dispatch(useBookInfoSelected(pageInfo));
  };

  return { getPageInfo, setPageInfo };
};
