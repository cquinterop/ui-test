import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavItem, NavLink,
  NavbarToggler, NavbarBrand,
  Container, UncontrolledCollapse,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <Navbar className="navbar--gradient" expand="lg">
        <Container>
          <NavbarBrand className="font-size-2 text-white" tag={Link} to="/">
            Rule of thumb.
          </NavbarBrand>
          <NavbarToggler className="text-white border-0" id="navbar_global">
            <FontAwesomeIcon icon={faBars} />
          </NavbarToggler>
          <UncontrolledCollapse navbar toggler="#navbar_global">
            <Nav className="font-size-1 ml-auto" navbar>
              <NavItem className="px-3">
                <NavLink className="font-weight-light text-white" tag={Link} to="/past-trials">
                  Past Trials
                </NavLink>
              </NavItem >
              <NavItem className="px-3">
                <NavLink className="font-weight-light text-white" tag={Link} to="/how-it-works">
                  How It Works
                </NavLink>
              </NavItem>
              <NavItem className="px-3">
                <NavLink className="font-weight-light text-white" tag={Link} to="/log-in">
                  Log In / Sign Up
                </NavLink>
              </NavItem>
              <NavItem className="px-3">
                <NavLink className="text-white" tag={Link} to="/search">
                  <FontAwesomeIcon icon={faSearch} />
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
