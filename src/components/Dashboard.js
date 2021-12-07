import React from 'react';
import Note from './Note.js';
import Masonry from 'react-masonry-css';
import { Col } from 'react-bootstrap';

export default function Dashboard(props) {
  const notes = props.notesData;

  return (
    <Col xs={10} className="offset-1">
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {notes.length > 0 &&
          notes.map((note, i) => (
            <Note key={i} note={note} />
          ))}
      </Masonry>
    </Col>
  )
}
