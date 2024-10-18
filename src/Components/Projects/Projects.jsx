import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="Projects">
      <h1 className="heading">Projects</h1>
      <div className="Projects pro">
        <ProjectCard title="weather app" link="https://abhi-react-weather.netlify.app"/>
        <ProjectCard title="Personal Portfolio" link="https://abhijith7171.netlify.app"/>
        <ProjectCard title="Chat Bot" link="https://abhijith-chat-bot.netlify.app"/>
        <ProjectCard title="TIC TAC TOE" link="https://tic-tac-toe-abhi.onrender.com/"/>
        <ProjectCard title="Resume Builder" link="https://abhijith71-resumebuilder.netlify.app/"/>
        <ProjectCard title="abreviation detector" link="https://abhijith71.netlify.app"/>
      </div>
    </div>
  );
};

export default Projects;
