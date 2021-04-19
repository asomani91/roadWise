import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Dashboard from "./pages/Dashboard/Dashboard";
import Logout from "./pages/Logout";
import Nav from "./components/navBar/nav";
import FooterContent from "./components/Footer/FooterContent";
import Login from "./pages/login/";
import Signup from "./components/Form/signup";

function App() {
  // const authLinks = (
  //   <Fragment>
  //     <NavItem>
  //       <span className="navbar-text mr-3">
  //         <strong>
  //           {auth && auth.user ? `Welcome ${auth.user.name}` : ""}
  //         </strong>
  //       </span>
  //     </NavItem>
  //     <NavItem>
  //       <Logout />
  //     </NavItem>
  //   </Fragment>
  // );
  // const guestLinks = (
  //   <Fragment>
  //     <NavItem>
  //       <RegisterModal />
  //     </NavItem>
  //     <NavItem>
  //       <LoginModal />
  //     </NavItem>
  //   </Fragment>
  // );
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
        <FooterContent />
      </div>
    </Router>
  );
}

export default App;
