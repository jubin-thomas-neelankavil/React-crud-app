import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import CrudApp from './components/crud-App'
import Modal from './components/common/Modal';


function App() {
  const [show, setShow] = useState(false);
    const handleModal = () => setShow(!show);
   
  
  return (
    <div>
      
   

<Modal
show={show}
handleModal={handleModal}
title='sample modal'
number={2255}

>

<CrudApp></CrudApp>

  </Modal>

<Button variant="primary" onClick={handleModal}>
       Launch demo modal
     </Button>


    </div>
  );
}

export default App;

