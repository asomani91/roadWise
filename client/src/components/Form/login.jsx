import React,{useState} from "react";
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
import API from "../../utils/API"
import {useHistory} from "react-router-dom"
function LoginForm(props) {
    const history = useHistory();

    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   const [user,setUser] = useState({});
    const[errors,setErrors]=useState({})

    const handleSubmit = async e => {
        e.preventDefault();
        API.login({email,password})
        .then(data=>{
            console.log("we here ");
            console.log(data.data);
            setUser(data.data) 
            
           
    
        }).catch(err=>{
            console.log("User Already signed in ");
            setErrors({errors:"userbad"})
            console.log(err);
        })

    
      
      }


    return (

        <Container className="signupContainer">
        <h1>{user.id}</h1>
            <div id="box">
                <form onSubmit={handleSubmit} id="loginForm">

                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
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
                                onChange={e => setPassword(e.target.value)}
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
