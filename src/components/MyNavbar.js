import Logo from './../img/logo.png';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="#"><img src={Logo} alt="" width="200" height="80" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About Us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              FirstStepEnglish
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                Our Directors
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                Our Courses
                </DropdownItem>
                <DropdownItem>
                For Schools
                </DropdownItem>
                <DropdownItem>
                General & Higher
                </DropdownItem>
                <DropdownItem>
                Business
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          <NavItem>
            <NavLink href="#">Online Tutions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Preschool & Daycare</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Downloads</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">FAQ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Blog</NavLink>
          </NavItem>
          </Nav>
          <form class="d-flex">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;