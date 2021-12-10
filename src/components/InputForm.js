import React from 'react';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {
  Col,
  InputGroup,
  Form,
  Button
} from 'react-bootstrap';

export default function InputForm(props) {
  const [note, setNote] = useState({});

  function handleChange(event) {
    setNote(prevNote => ({
      ...prevNote,
      [event.target.name]: event.target.value,
    }))
  }

  function handleSubmit() {
    if ('body' in note) {
      addNote(note);
      setNote({});
    }
  }

  function addNote(note) {
    props.setNotesData([...props.notesData, note]);
  }

  // function enterKey(event) {
  //   if (event.key === "Enter") {
  //     handleSubmit();
  //   }
  // }

  return (
    <Col xs={8} sm={4} className="offset-2 offset-sm-4 mt-5 mb-5 px-0 border rounded shadow">
      <InputGroup>
        <Form.Control
          className="border-0 rounded-top simplebox px-3 pt-2 pb-1 fw-bold"
          placeholder="title"
          type="title"
          name="title"
          value={note.title || ''}
          onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <TextareaAutosize
          className="border-0 rounded-bottom simplebox vw-100 px-3 pt-1 pb-4 no-resize"
          placeholder="enter a new note.."
          type="text"
          name="body"
          value={note.body || ''}
          onChange={handleChange}
          // onKeyPress={enterKey}
        />
        <Button
          className="position-absolute bottom-0 end-0 bg-white simplebox text-secondary"
          onClick={() => handleSubmit()}
          // style= {{ visibility: "hidden" }}
        >
          save
        </Button>
      </InputGroup>
    </Col>
  )
}
