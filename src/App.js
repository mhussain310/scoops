import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
