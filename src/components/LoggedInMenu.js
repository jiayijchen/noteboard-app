import React from 'react';
import {
  Dropdown
} from 'react-bootstrap';

export default function LoggedInMenu(props) {
  return (
    <>
      <Dropdown align="end" className="me-1">
        <Dropdown.Toggle variant="light" className="bg-white border-0 text-muted simplebox" id="dropdown-basic">
          <i className="bi-person-circle h3" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>{props.name}</Dropdown.Item>
          <Dropdown.Item as="button" variant="light">log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}