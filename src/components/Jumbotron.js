import React, { Component } from 'react';
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
    Button
} from 'reactstrap';

class Jumbotron extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to Sowka Smart Schools</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                    <Button color="primary">Primary btn</Button>{' '}
                                    <Button color="secondary">Secondary btn</Button>{' '}    
                                    <Button color="warning">Warning btn</Button>{' '}
                                    <Button color="danger">Danger btn</Button>{' '}
                                    <Button color="success">Success btn</Button>{' '}
                                    <Button color="info">info btn</Button>{' '}
                                    <Button color="link">link btn</Button>                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Jumbotron;