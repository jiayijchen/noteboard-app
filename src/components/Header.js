import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import LoginForm from './LoginForm';
import LoggedInMenu from './LoggedInMenu';
import { useAuth } from '../utilities/AuthContext';

export default function Header() {
  const [loginShow, setLoginShow] = React.useState(false);
  const { token } = useAuth();

  return (
    <>
      <Navbar>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {token.length === 0
              ? (
                <>
                  <Button
                    variant="light"
                    className="bg-white border-0 text-muted me-1"
                    onClick={() => setLoginShow(true)}
                  >
                    log in
                  </Button>
                  <Button variant="light" className="bg-white border-0 text-muted me-1">sign up</Button>
                </>
              )
              : <LoggedInMenu />
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <LoginForm
        loginShow={loginShow}
        setLoginShow={setLoginShow}
      />
    </>
  )
}
