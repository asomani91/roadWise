import React ,{useState,useEffect}from 'react';
import axios from "axios"
import Api from "../../utils/API";
import LoginForm from "../../components/Form/login";
import SignUpForm from "../../components/Form/signupform"
import Cars from "../../components/Cars/cars"
import "./dashboard.css"
function Dashboard() {
  const [user,setUser] = useState({});
  const [cars,setCars] = useState([]);

const usernameChange = (event,newValue) => this.setState({username:newValue});
const HandleAllCars = ()=>{
    
  Api.allCars()
   .then(res=>{
     setCars(res)
   }).catch(err =>console.log(err))

}
  
useEffect(() => {
HandleAllCars()
}, []);

  return (
   
    <div classNames="form">
      {/* <LoginForm />
      <SignUpForm/> */}
      <Cars Cars={cars}/>
    </div>
   
  )
}

export default Dashboard

