import React from "react";
import {Link} from "react-router-dom";
import "../styles/Projects.css";
const ProjectData = [
  {
    Key: 1,
    Title: "Taste Of Home",
    URL: "TasteOfHome",
    GamePath: "https://akchen.itch.io/taste-of-home",
    Img: "UnityProjects/TasteOfHome/thumbnail.PNG",
    Skills: ["Unity"],
    Summary: `Taste of Home is a casual puzzle game about cooking, memories, and family. Play as Kai as you attempt to recreate your Grandma's signature dish. Learn about your family's culture and origins as you embark on this cute little cooking adventure.`,
    Images: [
      {
        original: '/UnityProjects/TasteOfHome/Gameplay/Intro.GIF',
        thumbnail: '/UnityProjects/TasteOfHome/Gameplay/Intro.GIF',
      },
      {
        original: '/UnityProjects/TasteOfHome/Gameplay/1.PNG',
        thumbnail: '/UnityProjects/TasteOfHome/Gameplay/1.PNG',
      },
      {
        original: '/UnityProjects/TasteOfHome/Gameplay/2.PNG',
        thumbnail: '/UnityProjects/TasteOfHome/Gameplay/2.PNG',
      },
      {
        original: '/UnityProjects/TasteOfHome/Gameplay/Dialogue.GIF',
        thumbnail: '/UnityProjects/TasteOfHome/Gameplay/Dialogue.GIF',
      },
      {
        original: '/UnityProjects/TasteOfHome/Gameplay/3.PNG',
        thumbnail: '/UnityProjects/TasteOfHome/Gameplay/3.PNG',
      },
      {
        original: '/UnityProjects/TasteOfHome/Gameplay/4.PNG',
        thumbnail: '/UnityProjects/TasteOfHome/Gameplay/4.PNG',
      },
      {
        original: '/UnityProjects/TasteOfHome/Gameplay/Cooking.GIF',
        thumbnail: '/UnityProjects/TasteOfHome/Gameplay/Cooking.GIF',
      },
      {
        original: '/UnityProjects/TasteOfHome/Gameplay/5.PNG',
        thumbnail: '/UnityProjects/TasteOfHome/Gameplay/5.PNG',
      },
      {
        original: '/UnityProjects/TasteOfHome/Gameplay/6.PNG',
        thumbnail: '/UnityProjects/TasteOfHome/Gameplay/6.PNG',
      },
    ]
  },
  {
    Key: 2,
    Title: "Soul's Path",
    URL: "SoulsPath",
    GamePath: "https://akchen.itch.io/souls-path",
    Img: "UnityProjects/SoulsPath/thumbnail.PNG",
    Skills: ["Unity"],
    Summary: `Soul’s path is a platformer game that follows Sol the shadow fox who was cursed and imprisoned in a cave eternally. To escape the cave, the shadow fox must harvest the souls of the spirit birds by killing them. In each level, Sol is challenged to jump from rock to rock to hunt for spirit fire. When enough spirit fire is harvested, the lantern will light up his way to the next level.
    \n
    But watch out, along the path there are dangerous vines and poisonous water. Failing to connect with a rock also kills Sol as he is a shadow that only survives in the dark.`,
    Images: [
      {
        original: '/UnityProjects/SoulsPath/Gameplay/Intro.GIF',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/Intro.GIF',
        description: '',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/1.PNG',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/1.PNG',
        description: '',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/Mechanic.GIF',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/Mechanic.GIF',
        description: '',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/2.PNG',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/2.PNG',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/Platforms.GIF',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/Platforms.GIF',
        description: '',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/Transitions.GIF',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/Transitions.GIF',
        description: '',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/3.PNG',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/3.PNG',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/4.PNG',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/4.PNG',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/Vines.GIF',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/Vines.GIF',
        description: '',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/5.PNG',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/5.PNG',
      },
      {
        original: '/UnityProjects/SoulsPath/Gameplay/6.PNG',
        thumbnail: '/UnityProjects/SoulsPath/Gameplay/6.PNG',
      }
    ]
  },
  {
    Key: 3,
    Title: "Mare",
    URL: "Mare",
    GamePath: "https://zihang.itch.io/mare",
    Img: "UnityProjects/Mare/thumbnail.PNG",
    Skills: ["Unity"],
    Summary: `Seishi has the power of controlling day and night. You must dodge the spirits' attacks and survive for as long as possible. Use WASD to move, space to switch between day and night. The two-faced spirits will only move and attack in their active time, otherwise they will freeze. You can use the frozen spirits as a shield against the active spirits and kill the frozen spirits. Surviving gives you point. Killing spirits gives you bonus points. Staying in bound and close to the tower will increase your points faster.`,
    Images: [
      {
        original: '/UnityProjects/Mare/Gameplay/Light.GIF',
        thumbnail: '/UnityProjects/Mare/Gameplay/Light.GIF',
      },
      {
        original: '/UnityProjects/Mare/Gameplay/1.PNG',
        thumbnail: '/UnityProjects/Mare/Gameplay/1.PNG',
      },
      {
        original: '/UnityProjects/Mare/Gameplay/Switch.GIF',
        thumbnail: '/UnityProjects/Mare/Gameplay/Switch.GIF',
      },
      {
        original: '/UnityProjects/Mare/Gameplay/2.PNG',
        thumbnail: '/UnityProjects/Mare/Gameplay/2.PNG',
      },
      {
        original: '/UnityProjects/Mare/Gameplay/Death.GIF',
        thumbnail: '/UnityProjects/Mare/Gameplay/Death.GIF',
      },
      {
        original: '/UnityProjects/Mare/Gameplay/3.PNG',
        thumbnail: '/UnityProjects/Mare/Gameplay/3.PNG',
      },
    ]
  },
  {
    Key: 4,
    Title: "Ouch!",
    URL: "Ouch",
    GamePath: "https://zihang.itch.io/ouch",
    Img: "UnityProjects/Ouch/thumbnail.PNG",
    Skills: ["Unity"],
    Summary: `Rearrange the furniture around you to protect yourself from the earthquake!`,
    Images: [
      {
        original: '/UnityProjects/Ouch/Gameplay/Win.GIF',
        thumbnail: '/UnityProjects/Ouch/Gameplay/Win.GIF',
      },
      {
        original: '/UnityProjects/Ouch/Gameplay/1.PNG',
        thumbnail: '/UnityProjects/Ouch/Gameplay/1.PNG',
      },
      {
        original: '/UnityProjects/Ouch/Gameplay/Moving.GIF',
        thumbnail: '/UnityProjects/Ouch/Gameplay/Moving.GIF',
      },
      {
        original: '/UnityProjects/Ouch/Gameplay/2.PNG',
        thumbnail: '/UnityProjects/Ouch/Gameplay/2.PNG',
      },
      {
        original: '/UnityProjects/Ouch/Gameplay/3.PNG',
        thumbnail: '/UnityProjects/Ouch/Gameplay/3.PNG',
      },
    ]
  },
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
        to={`/unityproject/${projectDetails.URL}`}
        state={{title: projectDetails.Title, playUrl: projectDetails.GamePath, details: projectDetails}}
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
