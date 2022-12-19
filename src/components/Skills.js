import React from "react";
import "../styles/Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <Skill skillName={"Unity"} years={4}></Skill>
      <Skill skillName={"C#"} years={4}></Skill>
      <Skill skillName={"Python"} years={4}></Skill>
      <Skill skillName={"Java"} years={4}></Skill>
      <Skill skillName={"C++"} years={4}></Skill>
      <Skill skillName={"Unreal Engine"} years={1}></Skill>
    </div>
  );
};

export const Skill = ({skillName, years}) => {
  return (
    <div className="skill-container">
      <h2>{skillName}</h2>
      <p>{years} Years Experience</p>
    </div>
  );
};
