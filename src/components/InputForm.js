import React from 'react';
import { 
  Col,
  Form 
} from 'react-bootstrap';

export default function InputForm() {
  return (
    <Col xs={10} className="offset-1 mt-4 px-0 border rounded">
      <Form className="mx-0">
        <Form.Group controlId="noteTitle">
          <Form.Control type="title" className="border-0 border-bottom rounded-0" placeholder="Title" />
        </Form.Group>
        <Form.Group className="" controlId="noteContent">
          <Form.Control as="textarea" className="border-0" rows={2} placeholder="Start a new note.."/>
        </Form.Group>
      </Form>
    </Col>
  )
}
