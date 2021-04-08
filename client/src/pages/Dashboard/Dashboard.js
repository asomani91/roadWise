import React ,{useState,useEffect}from 'react';
import LoginForm from "../../components/Form/login";
import SignUpForm from "../../components/Form/signupform"
import "./dashboard.css"
function Dashboard() {
  const [user,setUser] = useState({});

const usernameChange = (event,newValue) => this.setState({username:newValue});


  return (
   <div>
    <div classNames="form">
      <LoginForm />
      <SignUpForm/>
    </div>
   </div>
  )
}

export default Dashboard

