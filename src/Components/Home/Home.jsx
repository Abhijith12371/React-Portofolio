import React from "react";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="info">
        <h1 className="red-gradient">Welcome To My Portfolio</h1>
        <p>
          I am a web developer and B.Tech student specializing in data science.
          My passion lies in creating innovative and user-friendly web
          applications that enhance user experiences. With a strong foundation
          in coding and design, I strive to deliver solutions that solve
          real-world challenges. I continuously seek opportunities to grow and
          expand my skill set in the ever-evolving tech landscape.
        </p>
        <a href="https://linkedin.com/in/abhijith71" target="_blank"><button className="learn">Learn more</button></a>
      </div>
    </motion.div>
  );
};

export default Home;
