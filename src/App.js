import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import CrudApp from './components/crud-App'
import Modal from './components/common/Modal';
import Index from './components/adminPannel';

function App() {
  const [show, setShow] = useState(false);
    const handleModal = () => setShow(!show);
   
    const [showLogin, setshowLogin] = useState(false);
    const handleModalLogin = () => setshowLogin(!showLogin);



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


<Modal
show={showLogin}
handleModal={handleModalLogin}
title=' sample two'
number={11111}
/>




<Button variant="primary" onClick={handleModal}>
       Launch demo modal
     </Button>


     <Button variant="primary" onClick={handleModalLogin}>
       sample Two
     </Button>


<Index></Index>


    </div>
  );
}

export default App;

