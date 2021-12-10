import React from 'react';
import {
  Dropdown
} from 'react-bootstrap';
import { useAuth } from '../utilities/AuthContext';

export default function LoggedInMenu() {
  const { userData, logout } = useAuth();

  return (
    <>
      <Dropdown align="end" className="me-1">
        <Dropdown.Toggle variant="light" className="bg-white border-0 text-muted simplebox py-1 px-1" id="dropdown-basic">
          <i className="bi-person-circle h3" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>{userData.name}</Dropdown.Item>
          <Dropdown.Item as="button" variant="light" onClick={logout}>log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
