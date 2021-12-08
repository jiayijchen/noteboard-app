import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Login from './Login';

export default function Header(props) {
  const [loginShow, setLoginShow] = React.useState(false);

  return (
    <div>
      <Navbar>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Button 
              variant="light" 
              className="bg-white border-0 text-muted me-1"
              onClick={() => setLoginShow(true)}
            >
              log in
            </Button>
            <Button variant="light" className="bg-white border-0 text-muted me-1">sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Login 
        show={loginShow}
        onHide={() => setLoginShow(false)}
        {...props}
      />
    </div>
  )
}
