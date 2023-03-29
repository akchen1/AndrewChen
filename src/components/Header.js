import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
export const Header = () => {
  return (
    <header>
      <Link to="/">
      <h3>Andrew Chen</h3>
      </Link>
      
      <div className="image-container">
        <img
          src={"/assets/images/icon-github.svg"}
          alt="github link"
          className="image-icons"
          onClick={() => window.open("https://github.com/akchen1", "_blank")}
        ></img>
        <img
          src={"/assets/images/icon-linkedin.svg"}
          alt="linkedin link"
          className="image-icons"
          onClick={() =>
            window.open("https://www.linkedin.com/in/akchen1/", "_blank")
          }
        ></img>
      </div>
    </header>
  );
};
