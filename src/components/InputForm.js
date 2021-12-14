import React from 'react';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {
  Col,
  InputGroup,
  Form,
  Button
} from 'react-bootstrap';
import { useAuth } from '../utilities/AuthContext';

export default function InputForm() {
  const [note, setNote] = useState({});
  const { notesData, setNotesData } = useAuth();

  function handleChange(event) {
    setNote(prevNote => ({
      ...prevNote,
      [event.target.name]: event.target.value,
    }))
  }

  function handleSubmit() {
    if ('content' in note) {
      addNote(note);
      setNote({});
    }
  }

  function addNote(note) {
    setNotesData([...notesData, note]);
  }

  // function enterKey(event) {
  //   if (event.key === "Enter") {
  //     handleSubmit();
  //   }
  // }

  return (
    <Col xs={10} sm={8} md={4} xl={3} className="mt-1 mt-sm-5 mb-4 mb-sm-5 px-0 border rounded shadow">
      <InputGroup>
        <Form.Control
          className="border-0 rounded-top simplebox px-3 pt-2 pb-1 fw-bold"
          placeholder="Title"
          type="title"
          name="title"
          value={note.title || ''}
          onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <TextareaAutosize
          className="border-0 rounded-bottom simplebox vw-100 px-3 pt-1 pb-4 no-resize"
          placeholder="Enter a new note.."
          type="text"
          name="content"
          value={note.content || ''}
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
