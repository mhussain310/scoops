import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notification from "./Notification/Notification";
import ShareModal from "./ShareModal/ShareModal";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./pages/Home";
import Article from "./pages/Article";
import SavedArticles from "./pages/SavedArticles";

import "./App.css";
import Category from "./pages/Category";

const App = () => {
  return (
    <Router>
      <div className="main-wrapper">
        <div className="main-container">
          <Navbar />
          <div className="content-wrapper">
            <Notification />
            <ShareModal />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route
                exact
                path="/saved-articles"
                component={SavedArticles}
              ></Route>
              <Route exact path="/:category" component={Category}></Route>
              <Route exact path="/article/:name" component={Article}></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
