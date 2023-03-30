import React from "react";
import {Link} from "react-router-dom";
import "../styles/Projects.css";
import { ProjectData } from "../ProjectData";

export const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-container">
        {Object.keys(ProjectData).map((key, index) => {
          return <Project key={index} projectKey={key}></Project>;
        })}
      </div>
      {/* <h1>Experimental Projects</h1>
      <div className="projects-container">
        {Object.keys(ProjectData).map((key, index) => {
          return <Project key={index} projectKey={key}></Project>;
        })}
      </div> */}
    </div>
  );
};

export const Project = (props) => {
  const projectKey = props.projectKey;
  const projectDetails = ProjectData[projectKey];

  return (
    <div className="project-container">
      <Link
        to={`/unityproject/${projectKey}`}
      >
        <img
          src={projectDetails.Img}
          alt={projectDetails.Title}
          className="project-image"
        ></img>
        <h3>{projectDetails.Title}</h3>
        {projectDetails.Skills.map((skill) => {
          return <p key={projectDetails.Key + skill}>{skill}</p>;
        })}
      </Link>
    </div>
  );
};
