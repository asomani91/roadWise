import React,{useEffect} from 'react';
import Api from "../../utils/API"
function Logout() {
 useEffect(()=>{
    Api.logout()
    .then(()=>{
        console.log("logout...")
        window.location.replace("/")
    })
 },[])
    return (
    <>
            <h1>Hello i logged out </h1>
    </>
  );
}
export default Logout;
