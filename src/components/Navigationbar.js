import React, {Component} from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown
} from 'reactstrap';

export default class Navigationbar extends React.Component {
    constructor(props) {
      super(props);
      this.toggleOpenState = this.toggleOpenState.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggleOpenState() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="#ffffff" light expand="md">
                 <NavbarBrand href="/">
                  This is a Navbar Demo
                  </NavbarBrand>
                 {/* Below, we'll add toggler for auto-collapse */}
                    <NavbarToggler onClick={this.toggleOpenState} />
                    <Collapse isOpen={this.state.isOpen} navbar>
  
                {/*Pull towards left */}
              <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink href="/link/">
                          Left Navigation Link
                      </NavLink>
                  </NavItem>
              </Nav>
  
              {/* Pull towards right */}
              <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Chris
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem>
                      My Account
                    </DropdownItem>
                    <DropdownItem>
                      Page Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }