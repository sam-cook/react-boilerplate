import React, { Component } from 'react'
import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap'

class Navigation extends Component {
  
  constructor(props) {
    super()
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Company Name</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#">Link</NavItem>
          <NavItem  href="#">Link</NavItem>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <MenuItem>Action</MenuItem>
            <MenuItem>Another action</MenuItem>
            <MenuItem>Something else here</MenuItem>
            <MenuItem>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }

}

export default Navigation
