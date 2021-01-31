import React, {Component} from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Logo from './../img/logo.png';
import './../scss/navbar.css';
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
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <nav class="navbar navbar-light bg-light">
              <div class="container">
                <a class="navbar-brand" href="#">
                  <img src={Logo} alt="" width="200" height="80" />
                </a>
              </div>
            </nav>
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about-us-2">About Us</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="/about">Our Directors</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#">Our Courses</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/for-schools">For Schools</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/general-and-higher">General & Higher</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/343-2">Business</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/online-tuitions">Online Tutions</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/preschool-and-day-care">Preschool & Daycare</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact-us">Contact Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/downloads">Downloads</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/faq">FAQ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/blog">Blog</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }