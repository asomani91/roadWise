import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home"
import Nav from "./components/NavTabs";


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch >
      <Route path="/Dashboard">
      <Dashboard />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
