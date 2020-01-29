import React, { useState } from 'react';
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="navbar-transparent" light expand="md">
        <Container>
          <NavbarBrand href="/">Rule of thumb.</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/past-trials">Past Trials
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/how-it-works">How It Works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/log-in">Log In / Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;