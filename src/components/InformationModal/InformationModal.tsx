import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InformationModal.css';

function InformationModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="modal__button" variant="danger" onClick={handleShow}>
        What is this?
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title id="modal__header">Oj-Mat-API</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal__description">
          Check out my great API! Now you can download all data from your favorite TV series -
          Father Matthew! Check all info about your favorite characters. Great for quizzes - play
          with your friends!
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InformationModal;
