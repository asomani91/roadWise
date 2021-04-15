import React from "react";
import "./login.css";

import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';


function LoginForm(props) {





    return (
        <Container className="signupContainer">
            <div id="box">
                <form id="loginForm">

                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control check custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                    <p className="forgot-password text-right">
                        <a href="#">   Forgot password?</a>
                    </p>

                </form>



                <Form className="signUp">
                    <h2>Sign In</h2>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </div>
        </Container>


    );
};

export default LoginForm;
