import React from "react";
import {Link} from "react-router-dom";
import "../styles/Projects.css";
const ProjectData = [
  {
    Key: 1,
    Title: "Mare",
    Img: "UnityProjects/Mare/thumbnail.PNG",
    Skills: ["Unity"],
  },
  {
    Key: 2,
    Title: "Ouch!",
    Img: "UnityProjects/OUCH/thumbnail.PNG",
    Skills: ["Unity"],
  },
  // {
  //   Key: 3,
  //   Title: "TODO WEB APP",
  //   Img: "assets/images/thumbnail-project-3-small.webp",
  //   Skills: ["HTML", "CSS", "JAVASCRIPT"],
  // },
  // {
  //   Key: 4,
  //   Title: "ENTERTAINMENT WEB APP",
  //   Img: "assets/images/thumbnail-project-4-small.webp",
  //   Skills: ["HTML", "CSS", "JAVASCRIPT"],
  // },
  // {
  //   Key: 5,
  //   Title: "MEMORY GAME",
  //   Img: "assets/images/thumbnail-project-5-small.webp",
  //   Skills: ["HTML", "CSS", "JAVASCRIPT"],
  // },
  // {
  //   Key: 6,
  //   Title: "ART GALLERY SHOWCASE",
  //   Img: "assets/images/thumbnail-project-6-small.webp",
  //   Skills: ["HTML", "CSS", "JAVASCRIPT"],
  // },
];
export const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-container">
        {ProjectData.map((project) => {
          return <Project key={project.Key} projectDetails={project}></Project>;
        })}
      </div>
    </div>
  );
};

export const Project = (props) => {
  const projectDetails = props.projectDetails;

  return (
    <div className="project-container">
      <Link
        to={`/unityproject/${projectDetails.Title}`}
        target="_blank"
        rel="noopener noreferrer"
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
