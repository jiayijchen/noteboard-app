import React from 'react';
import {
  Col,
  Card
} from 'react-bootstrap';

export default function Note(props) {
  return (
    <Col xs={3} className="p-1">
      <Card className="shadow-sm" style={{ width: "" }}>
        <Card.Body className="py-2">
          <Card.Title>{props.note.title}</Card.Title>
          <Card.Text className="p-wrap">{props.note.body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
