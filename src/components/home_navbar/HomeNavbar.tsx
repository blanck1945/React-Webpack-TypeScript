import * as React from "react";
import { useState } from "react";
const working = require("../../assets/navbar_img/working.jpg");
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./HomeNavbar.scss";

const HomeNavbar: React.FunctionComponent = () => {
  return (
    <div className="home_nav">
      <LazyLoadImage
        src={working.default}
        alt="central_img"
        effect="blur"
        height="100%"
        width="100%"
      />
      <div className="abs-Box">
        <h2 className="abs_title">
          Webpack - React - TypeScript Init Template
        </h2>
        <h3 className="type">TypeScript</h3>
        <h3 className="react">React</h3>
        <h3 className="scss">SCSS</h3>
        <h3 className="router">React Router</h3>
        <h3 className="icons">React icons</h3>
        <h3 className="forms">React Hook forms</h3>
        <h3 className="axios">Axios</h3>
        <h3 className="lazy">Lazy Loading Image</h3>
        <h3 className="query">React-Query</h3>
      </div>
    </div>
  );
};

export default HomeNavbar;
