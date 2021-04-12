import React ,{useState,useEffect}from 'react';
import LoginForm from "../../components/Form/login";

import "./dashboard.css"
function Dashboard() {
  const [user,setUser] = useState({});

const usernameChange = (event,newValue) => this.setState({username:newValue});


  return (
   <div>
    <div classNames="form">
     
        
      

      <LoginForm  />
      
     

      </div>
    </div>
  
  )
}

export default Dashboard

