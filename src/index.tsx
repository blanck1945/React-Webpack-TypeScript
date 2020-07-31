import * as React from "react";
import * as reactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.scss";
import Navbar from "./layouts/Navbar/navbar";
import Footer from "./layouts/Footer/Footer";
import HomeNavbar from "./components/home_navbar/HomeNavbar";

const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeNavbar} />
      </Switch>
      <Footer />
    </div>
  );
};

reactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
