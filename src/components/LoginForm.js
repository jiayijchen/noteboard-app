import React from 'react';
import { useState } from 'react';
import { Form, Button, Row, Modal } from 'react-bootstrap';
import { useAuth } from '../utilities/AuthContext';

export default function LoginForm(props) {
  const [loginData, setLoginData] = useState({});
  const { login } = useAuth();

  function submitLogin(e) {
    e.preventDefault();
    const data = {
      "grant_type": "password",
      "client_id": 2,
      "client_secret": "Z93Jt2oPyAgmcHu7EzqxX37wXSNiQ8CmmvGNbwqN",
      "username": loginData.email,
      "password": loginData.password,
      "scope": "",
    };
    login(data, props.setLoginShow);

  }

  function handleChange(event) {
    setLoginData(prevLoginData => ({
      ...prevLoginData,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Modal show={props.loginShow} onHide={() => props.setLoginShow(false)} size="sm" centered>
      <Modal.Header closeButton className="text-center py-0" >
        <Modal.Title className="ps-3 pt-2 w-100">log in</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center pt-1">
        <Form className="col-10 offset-1" onSubmit={submitLogin}>
          <Form.Group className="mb-1">
            <Form.Control
              className="text-center pb-0 border-0 border-bottom simplebox"
              type="email"
              name="email"
              placeholder="example@example.com"
              value={loginData.email || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              className="text-center pb-0 border-0 border-bottom simplebox"
              type="password"
              name="password"
              placeholder="password"
              value={loginData.password || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Button variant="dark" type="submit" className="col-4 offset-4">log in</Button>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
