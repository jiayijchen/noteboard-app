import React from 'react';
import Note from './Note.js';
import Masonry from 'react-masonry-css';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import InputForm from './InputForm.js';

export default function Dashboard(props) {
  const [notesData, setNotesData] = useState([]);

  useEffect(() => {
    console.log(notesData);
  });

  return (
    <>
      <Row>
        <InputForm notesData={notesData} setNotesData={setNotesData} />
      </Row>
      <Row>
        <Col xs={10} className="offset-1">
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {notesData.length > 0 &&
              notesData.map((note, i) => (
                <Note key={i} note={note} />
              ))}
          </Masonry>
        </Col>
      </Row>
    </>
  )
}
