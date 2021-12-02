import React from 'react';
import { useState } from 'react';
import { 
  Col,
  Form 
} from 'react-bootstrap';

export default function InputForm(props) {
  const [note, setNote] = useState({});

  function handleChange(event) {
    setNote( prevNote => ({
      ...prevNote,
      [event.target.name] : event.target.value,
    }))
  }

  function handleSubmit() {
    if (note.body !== "") {
      props.addNote(note);
      setNote({});
    }
  }

  function enterKey(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <Col xs={10} className="offset-1 mt-4 px-0">
      <Form className="mx-0 border rounded">
        <Form.Group controlId="noteTitle">
          <Form.Control 
            className="border-0 border-bottom rounded-0" 
            placeholder="Title"
            type="title"
            name="title"
            value={note.title || ''}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="" controlId="noteContent">
          <Form.Control 
            // as="textarea" 
            className="border-0" 
            placeholder="Start a new note.."
            type="text"
            name="body"
            value={note.body || ''}
            onChange={handleChange}
            onKeyPress={enterKey}
            rows={1} />
        </Form.Group>
      </Form>
    </Col>
  )
}
