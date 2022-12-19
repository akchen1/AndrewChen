import React from "react";
import "../styles/Header.css";
export const Header = () => {
  return (
    <header>
      <h3>Andrew Chen</h3>
      <div className="image-container">
        <img
          src={"assets/images/icon-github.svg"}
          alt="github link"
          className="image-icons"
          onClick={() => window.open("https://github.com/akchen1", "_blank")}
        ></img>
        <img
          src={"assets/images/icon-linkedin.svg"}
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
