import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import LoginForm from './LoginForm';
import LoggedInMenu from './LoggedInMenu';

export default function Header(props) {
  const [loginShow, setLoginShow] = React.useState(false);

  return (
    <div>
      <Navbar>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {props.token.length === 0
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
              : (
                <>
                  <LoggedInMenu name={props.userData?.name} />
                  {/* <Button variant="light" className="bg-white border-0 text-muted simplebox me-1"><i className="bi-person-circle h3" /></Button> */}
                  {/* <p className="text-muted mt-3 me-1">Hello, {props.userData.name}
                    <Button variant="light" className="bg-white border-0 text-muted me-1">log out</Button>
                  </p> */}
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <LoginForm
        loginShow={loginShow}
        setLoginShow={setLoginShow}
        {...props}
      />
    </div>
  )
}
