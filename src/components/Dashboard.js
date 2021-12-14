import React from 'react';
import Note from './Note.js';
import Masonry from 'react-masonry-css';
import { Col, Container, Row } from 'react-bootstrap';
import InputForm from './InputForm.js';
import { useAuth } from '../utilities/AuthContext.js';

export default function Dashboard(props) {
  const { notesData } = useAuth();
  
  const masonryBreakpointCols = {
    default: 4,
    992: 3,
    768: 2,
    576: 1
  }

  // useEffect(() => {
  //   setNotesData([
  //     { 
  //       title: "Note 1",
  //       content: "This is the first note"
  //     },
  //     { 
  //       title: "Note 2",
  //       content: "This is the second note\nwith multiple lines"
  //     }
  //   ])
  // }, [])

  return (
    <Container fluid className="pb-5">
      <Row className="justify-content-center">
        <InputForm />
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} lg={10}  xl={8} className="">
          <Masonry
            breakpointCols={masonryBreakpointCols}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {notesData.length > 0 &&
              notesData.map((note, i) => (
                <Note key={i} note={note} />
              ))}
          </Masonry>
        </Col>
      </Row>
    </Container>
  )
}
