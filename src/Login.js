import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function Login(props) {
    return (
        <div>
            {/* <label for="firstname">Firstname:</label>
            <input name="firstname" value={props.state.firstname} onChange={props.handleChange} />
            <br/>
            <label for="username">Username:</label>
            <input name="username" value={props.state.username} onChange={props.handleChange} />
            <br/>
            <label for="password">Password:</label>
            <input name="password" value={props.state.password} onChange={props.handleChange} />
            <br/>
            <label for="dob">Date of Birth:</label>
            <input name="dob" value={props.state.dob} onChange={props.handleChange} />
            <br/> */}
            <Container>
                <Form>
                    <Row className="loginInput">
                        <Col md={{span:6, offset:3}}>
                            <Form.Control type="firstname" placeholder="Enter Firstname" />
                        </Col>
                    </Row>
                    <Row className="loginInput">
                        <Col md={{span:6, offset:3}}>
                            <Form.Control type="Username" placeholder="Username" />
                        </Col>
                    </Row>
                    <Row className="loginInput">
                        <Col md={{span:6, offset:3}}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Row>
                    <Row className="loginInput">
                        <Col md={{span:6, offset:3}}>
                            <Form.Control type="dob" placeholder="Date of Birth" />
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col>
                        <Button onClick={props.handleClick} variant="primary">Submit</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;