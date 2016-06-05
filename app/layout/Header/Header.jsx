import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavbarBrand, Nav, NavItem } from 'react-bootstrap';
// Importing these because the export from the module doesn't contain
// the child components, which breaks the serverside rendering if
// used the way the documentation wants us to.
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar fixedTop>
          <NavbarHeader>
            <NavbarBrand>
              <IndexLink to="/">Equestria.tv</IndexLink>
            </NavbarBrand>
            <NavbarToggle />
          </NavbarHeader>
          <NavbarCollapse>
            <Nav>
              <LinkContainer to="/messages">
                <NavItem eventKey={1} href="#">Messages</NavItem>
              </LinkContainer>
              <LinkContainer to="/channel">
                <NavItem eventKey={2} href="#">Channel</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Sign In</NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </header>
    )
  }
}

export default Header;