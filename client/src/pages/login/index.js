import React, { useState, useEffect } from "react";
// import "./login.css";

import { Container } from "reactstrap";
import API from "../../utils/API";

function Login(props) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const userData = {
      email: email,
      name: user,
      password: password,
    };
    API.login({ userData })
      .then((data) => {
        console.log("Login/api call component ");
        console.log(data.data);
        setUser(data.data);
      })
      .catch((err) => {
        console.log("User not found ");
        setErrors({ errors: "userbad" });
        console.log("err", err);
      });
  };
  // dont ned this right now
  // useEffect(() => {
  //   console.log(email);
  // }, []);

  return (
    <Container className="signupContainer">
      <h1> {user.id} </h1>
      <div id="box">
        <form onSubmit={handleSubmit} id="loginForm">
          <h3> Log in </h3>
          <div className="form-group">
            <label> Email </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Password </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div className="custom-control check custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Sign in
          </button>
          <p className="forgot-password text-right">
            <a> Forgot password ? </a>
          </p>
        </form>
      </div>
    </Container>
  );
}

export default Login;
