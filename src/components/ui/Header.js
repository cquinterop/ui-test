import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="navbar-transparent" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">Rule of thumb.</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/past-trials">Past Trials
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/how-it-works">How It Works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/log-in">Log In / Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;