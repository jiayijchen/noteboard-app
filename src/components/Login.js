import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Row, Modal } from 'react-bootstrap';

export default function Login(props) {
  const [data, setData] = useState({});

  const login = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://Laravel-jiayichen.codeanyapp.com/oauth/token",
      data: {
        "grant_type": "password",
        "client_id": 2,
        "client_secret": "xAl8ZXkr5T2CdLoRlbnlB2iUrAA2ieRAqpReuvk3",
        "username": data.email,
        "password": data.password,
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
      localStorage.setItem('token', response.data.access_token)
      props.setToken(response.data.access_token)
    })

    .catch(function (error) {
      console.log(error);
    });
  }
  

  return (
    <Modal {...props} size="sm" centered>
      <Modal.Header closeButton className="text-center py-0" >
        <Modal.Title className="ps-3 pt-2 w-100">log in</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center pt-1">
        <Form className="col-10 offset-1">
          <Form.Group className="mb-1">
            <Form.Control 
              className="text-center pb-0 border-0 border-bottom simplebox" 
              type="email"
              name="loginEmail"
              placeholder="example@example.com" 
              value={data.loginEmail || ""}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control 
              className="text-center pb-0 border-0 border-bottom simplebox" 
              type="password" 
              name="loginPassword"
              placeholder="password" 
              value={data.loginPassword || ""}
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
