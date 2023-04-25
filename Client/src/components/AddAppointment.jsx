import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function AddAppointment() {
  const [validated, setValidated] = useState(false);


    const [show, setShow] = useState(false);

    const handleClose = () => {
    setShow(false)
    window.location.reload();
    };
    const handleShow = () => setShow(true);

  return (
    
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} >
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item Name</Form.Label>
              <Form.Control required name="item" type="text" placeholder="item" autoFocus />
              <Form.Control.Feedback type="invalid">Please enter item name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control required name="price" type="text" placeholder="Price" />
              <Form.Control.Feedback type="invalid">Please enter price.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control required name="desc" as="textarea" rows={3}  />
              <Form.Control.Feedback type="invalid">Please enter description.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact</Form.Label>
              <Form.Control required name="contact" type="text" placeholder="xxx-xxx-xxxx" />
              <Form.Control.Feedback type="invalid">Please enter contact.</Form.Control.Feedback>
            </Form.Group>
            
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button type='submit' name="save" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          
          </Form>
          
        </Modal.Body>
        
      </Modal>
    </div>
  );

}
