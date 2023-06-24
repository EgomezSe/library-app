import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './InputSearch.scss';


const InputSearch = ({onBookFilter}) => {

  const [inputValue, setInputValue ]= useState('');


  const bookFilter = () => {
    onBookFilter(inputValue);
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <>
        <div className='search-container'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <InputGroup className="mb-3" onChange={handleChange}>
                <Form.Control type="text" placeholder="Buscar"  />
                <InputGroup.Text id="basic-addon2" >
                  <button className='search_button' onClick={(event) => bookFilter()} >
                    <i className='large material-icons'>search</i>
                  </button>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Form>
        </div>
    </>
  );
};

export default InputSearch;
