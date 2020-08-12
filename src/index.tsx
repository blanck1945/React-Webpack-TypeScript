import * as React from "react";
import * as reactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/navbar";
import Footer from "./layouts/Footer/Footer";
import HomeNavbar from "./components/home_navbar/HomeNavbar";
import { Provider } from "react-redux";
import { store as Redux_Store } from "./Redux_Store/store";
import "./main.scss";

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
  <Provider store={Redux_Store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);
