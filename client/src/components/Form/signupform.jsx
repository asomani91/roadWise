import React from 'react';
import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import "./signup.css"
function SignUpForm() {
    return ( <Container className="signUp">
        <h2>Sign In</h2>
        <Form className="form">
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
      </Container>
    )
}

export default SignUpForm