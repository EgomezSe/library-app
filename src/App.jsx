import  {Fragment} from 'react';
import {LibraryRouter} from './router/LibraryRouter.jsx';
import {useBooksListEvent} from './hooks/books-list/books-list.hook.js';
import {useEffect} from 'react';


const App = () => {

    const {setBooksListInfo} = useBooksListEvent();

    useEffect(() => {
        setBooksListInfo().then();
    }, []);

  return (
    <>
         <Fragment>
             <LibraryRouter></LibraryRouter>
        </Fragment>
      
    </>
  );
};

export default App;
