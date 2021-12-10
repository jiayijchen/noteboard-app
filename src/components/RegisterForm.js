import React from 'react';
import { useState } from 'react';
import { Form, Button, Row, Modal } from 'react-bootstrap';
import { useAuth } from '../utilities/AuthContext';

export default function RegisterForm(props) {
  const [registerData, setRegisterData] = useState({});
  const { register } = useAuth();

  function submitRegister(e) {
    e.preventDefault();
    const data = {
      "name": registerData.name,
      "email": registerData.email,
      "password": registerData.password,
    };
    register(data, props.setRegisterShow);

  }

  function handleChange(event) {
    setRegisterData(prevRegisterData => ({
      ...prevRegisterData,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Modal show={props.registerShow} onHide={() => props.setRegisterShow(false)} size="sm" centered>
      <Modal.Header closeButton className="text-center py-0" >
        <Modal.Title className="ps-3 pt-2 w-100">sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center pt-1">
        <Form className="col-10 offset-1" onSubmit={submitRegister}>
          <Form.Group className="mb-1">
            <Form.Control
              className="text-center pb-0 border-0 border-bottom simplebox"
              name="name"
              placeholder="full name"
              value={registerData.name || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control
              className="text-center pb-0 border-0 border-bottom simplebox"
              type="email"
              name="email"
              placeholder="example@example.com"
              value={registerData.email || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              className="text-center pb-0 border-0 border-bottom simplebox"
              type="password"
              name="password"
              placeholder="password"
              value={registerData.password || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Button variant="dark" type="submit" className="col-4 offset-4">sign up</Button>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
