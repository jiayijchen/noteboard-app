import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LoggedInMenu from './LoggedInMenu';
import { useAuth } from '../utilities/AuthContext';

export default function Header() {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const { token } = useAuth();

  return (
    <>
      <Navbar className="py-0" style={{ maxHeight: "40px" }}>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {token.length === 0
              ? (
                <>
                  <Button
                    variant="light"
                    className="bg-white border-0 mt-1 text-muted simplebox"
                    onClick={() => setLoginShow(true)}
                  >
                    log in
                  </Button>
                  <Button 
                    variant="light" 
                    className="bg-white border-0 mt-1 text-muted simplebox"
                    onClick={() => setRegisterShow(true)}
                  >
                    sign up
                  </Button>
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

      <RegisterForm
        registerShow={registerShow}
        setRegisterShow={setRegisterShow}
      />
    </>
  )
}
