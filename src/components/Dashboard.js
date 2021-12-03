import React from 'react';
import Note from './Note.js';

export default function Dashboard(props) {
  const notes = props.notesData;

  return (
    <>
      {notes.length > 0 &&
        notes.map((note, i) => (
          <Note key={i} note={note} />
        ))}
    </>
  )
}
