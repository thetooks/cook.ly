import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import MenuItem from 'react-bootstrap/lib/MenuItem';

class Navigationbar extends React.Component {
  

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/test">Cook.ly</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
      
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Become a Host</NavItem>
            <NavItem eventKey={2} href="#">Sign Up</NavItem>
            <NavItem eventKey={3} href="#">Log In </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


module.exports = Navigationbar;