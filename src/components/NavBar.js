import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
  return (
    <div>
      <Navbar>
        <Navbar.Collapse className="justify-content-end pe-2">
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
