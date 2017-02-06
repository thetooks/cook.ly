import React from 'react';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';
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
            <LinkContainer to="/host"><NavItem eventKey={1} >Host Dashboard</NavItem></LinkContainer>
            <LinkContainer to="/user"><NavItem eventKey={2} >User Dashboard</NavItem></LinkContainer>
            <LinkContainer to="/login"><NavItem eventKey={4} >SIGN IN </NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


module.exports = Navigationbar;