import React from "react";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  return (
    <>
    <h1 className="heading Projects">Achievements</h1>
      <div className="achievements">
        <AchievementCard
          title="Completed Web Development Bootcamp"
          description="Successfully completed a 12-week intensive bootcamp focused on full-stack web development, enhancing skills in HTML, CSS, JavaScript, and frameworks like React and Node.js."
          date="June 2024"
        />
        <AchievementCard
          title="300+ Followers on LinkedIn"
          description="Built a professional network on LinkedIn, reaching over 300 followers through engaging content related to web development and tech."
          date="July 2024"
        />
        <AchievementCard
          title="50+ Projects"
          description="Developed and showcased over 50 projects, demonstrating practical skills in web development, including responsive design and backend integration."
          date="August 2024"
        />
        <AchievementCard
          title="1500+ Impressions on LinkedIn"
          description="Achieved over 1500 impressions on LinkedIn by sharing insightful articles and personal projects, increasing visibility within the tech community."
          date="August 2024"
        />
      </div>
    </>
  );
};

export default Achievements;
