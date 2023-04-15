import React ,{useState}from 'react'
import LoginModal from '../common/Modal'
import Button from 'react-bootstrap/Button';

function Index() {
  
    const [showAdmin, SetshowAdmin] = useState(false);
    const handleAdmin = () => SetshowAdmin(!showAdmin);


  return (
    <div>

<LoginModal
show={showAdmin}
handleModal={handleAdmin}
title='admin page'
number={454545}
>

  </LoginModal>


<Button variant="primary" onClick={handleAdmin}>
       Admin
     </Button>
    </div>
  )
}

export default Index