import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Row, Modal } from 'react-bootstrap';

export default function Login(props) {
  const [data, setData] = useState({});

  function submitLogin(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://laravel-jiayichen.codeanyapp.com/oauth/token",
      data: {
        "grant_type": "password",
        "client_id": 2,
        "client_secret": "Z93Jt2oPyAgmcHu7EzqxX37wXSNiQ8CmmvGNbwqN",
        "username": data.loginEmail,
        "password": data.loginPassword,
        "scope": "",
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
        //"Authorization": `Bearer ${token}`,
      },
    })


      .then(function (response) {
        localStorage.setItem('authToken', response.data.access_token)
        props.setToken(response.data.access_token)
        console.log("Login successful.");
        console.log(response);
      })

      .catch(function (error) {
        console.log(error);
      });
      
}

function handleChange(event) {
  setData(prevData => ({
    ...prevData,
    [event.target.name]: event.target.value,
  }))
}

return (
  <Modal {...props} size="sm" centered>
    <Modal.Header closeButton className="text-center py-0" >
      <Modal.Title className="ps-3 pt-2 w-100">log in</Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center pt-1">
      <Form className="col-10 offset-1" onSubmit={submitLogin}>
        <Form.Group className="mb-1">
          <Form.Control
            className="text-center pb-0 border-0 border-bottom simplebox"
            type="email"
            name="loginEmail"
            placeholder="example@example.com"
            value={data.loginEmail || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className="text-center pb-0 border-0 border-bottom simplebox"
            type="password"
            name="loginPassword"
            placeholder="password"
            value={data.loginPassword || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Row>
          <Button variant="dark" type="submit" className="col-4 offset-4">Submit</Button>
        </Row>
      </Form>
    </Modal.Body>
  </Modal>
)
}
