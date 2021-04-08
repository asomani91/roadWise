import { BrowserRouter as Router} from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";

import Nav from "./components/NavTabs";


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Dashboard />
    </div>
    </Router>
  );
}

export default App;
