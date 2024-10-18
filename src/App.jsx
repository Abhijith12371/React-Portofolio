import { useState } from "react";
import { motion } from "framer-motion"; 
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import Home from "./Components/Home/Home";
import Technologies from "./Components/Technologies/Technologies";
import Achievements from "./Components/PersonalAchievements/Achievements";
import "./style.css";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <motion.div className="container">
      <Nav />
      <ScrollSection id="home"> {/* Add ID for Home */}
        <Home />
      </ScrollSection>
      <ScrollSection id="projects"> {/* Add ID for Projects */}
        <Projects />
      </ScrollSection>
      <ScrollSection id="technologies"> {/* Add ID for Technologies */}
        <Technologies />
      </ScrollSection>
      <ScrollSection id="achievements"> {/* Add ID for Achievements */}
        <Achievements />
      </ScrollSection>
      <ScrollSection id="contact"> {/* Add ID for Contact Form */}
        <ContactForm />
      </ScrollSection>
    </motion.div>
  );
}

// ScrollSection component for scroll-triggered animations
const ScrollSection = ({ children, id }) => {
  return (
    <motion.div
      id={id} // Assign ID to each ScrollSection
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} 
      transition={{ duration: 0.5 }} 
      viewport={{ once: false, amount: 0.2 }} 
    >
      {children}
    </motion.div>
  );
}

export default App;
