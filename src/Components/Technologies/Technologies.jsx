import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Technology from "./Technology";
import "./technology.css";

const Technologies = () => {
  // Define animation variants for each technology item
  const techVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts off slightly below and hidden
    visible: { opacity: 1, y: 0 }, // Moves up to the center and becomes visible
    transition: { duration: 0.5, ease: "easeOut" }, // Smooth transition
  };

  return (
    <>
      <h1 className="heading Projects">Technologies</h1>
      <div className="technologies">
        <Technology link="fa-brands fa-react" title="Front End"/>
        <Technology link="fa-brands fa-js" title="Back End"/>
        <Technology link="fa-brands fa-node" title="Frame Works"/>
        <Technology link="fa-brands fa-database" title="Mongo DB"/>
      </div>
    </>
  );
};

export default Technologies;
