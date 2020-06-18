import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavbarMain from "./components/Navbar/NavbarMain";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route
            path="/"
            render={() => <Redirect to="/admin" />}
            exact={true}
          />
          <Route path="/admin" exact={true} component={Layout} />
          <Route path="/admin/login" component={Login} />
          <Route path="/admin/register" component={Register} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
