import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Modalpop({title,handleModal,show,number=1000,children}) {

  console.log(show)


  return (
 <>
     

     <Modal show={show} onHide={handleModal}>
       <Modal.Header closeButton>
         <Modal.Title>{`${title}---${number}`}</Modal.Title>
       </Modal.Header>
       <Modal.Body> {children}</Modal.Body>
       <Modal.Footer>
      
         <Button variant="secondary" onClick={handleModal}>
           Close
         </Button>
         <Button variant="primary" onClick={handleModal}>
           Save Changes
         </Button>
       </Modal.Footer>
     </Modal>
   </>
  )
}

export default Modalpop