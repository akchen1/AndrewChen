import React from "react";
import "../styles/Intro.css";
// import profileImage from "../assets/images/image-profile-desktop.webp";
export const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="flex-item intro-text">
          <h1>
            Nice to meet you!<br></br>I'm{" "}
            <span className="profile-name">Andrew Chen</span>.
          </h1>
          <p className="intro-description">
            Graduate from the University of Alberta's computer software
            engineering program, I'm a game developer looking to create unique
            and immersive games!
          </p>
          <p
            className="contact"
            onClick={() => window.location.replace("#footer")}
          >
            CONTACT ME
          </p>
        </div>
        <div className="flex-item profile-image-container">
          <img
            src="assets/images/image-profile-desktop.webp"
            alt="Profile"
            className="profile-image"
          ></img>
        </div>
      </div>
      <div className="line-break"></div>
    </>
  );
};
