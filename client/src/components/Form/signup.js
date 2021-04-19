import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import API from "../../utils/API";

function Signup() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [formObject, setFormObject] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formObject);
    if (formObject.email && formObject.password) {
      const userData = {
        email: formObject.email,
        name: formObject.name,
        password: formObject.password,
      };
      API.create(userData)
        .then((data) => {
          console.log("user Signed up ");
          console.log(data.data);
          setUser(data.data);
        })
        .catch((err) => console.log(err));
    }
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  return (
    <Form className="signUp" onSubmit={handleSubmit}>
      <h2> Sign Up </h2>
      <Col>
        <FormGroup>
          <Label> Email </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            onChange={handleInputChange}
            placeholder="myemail@email.com"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label> name </Label>
          <Input
            type="text"
            name="name"
            id="user"
            onChange={handleInputChange}
            placeholder="username"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label> password </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </FormGroup>
      </Col>
      <Button> Submit </Button>
    </Form>
  );
}

export default Signup;
