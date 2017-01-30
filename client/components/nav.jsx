import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import MenuItem from 'react-bootstrap/lib/MenuItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import Link from 'react-router/lib/Link';

class Navigationbar extends React.Component {
  

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Cook.ly</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
      
          <Nav pullRight>
            <LinkContainer to="/host"><NavItem eventKey={1} >BECOME A HOST</NavItem></LinkContainer>
            <LinkContainer to="/signup"><NavItem eventKey={2} >SIGN UP</NavItem></LinkContainer>
            <LinkContainer to="/login"><NavItem eventKey={3} >SIGN IN </NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


module.exports = Navigationbar;