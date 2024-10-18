import React from 'react';
import './AchievementCard.css'; // Ensure you create this CSS file

const AchievementCard = ({ title, description, date }) => {
  return (
    <div className="achievement-card">
      <div className="achievement-header">
        <i className="fa-solid fa-trophy"></i> {/* Example icon */}
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <p className="achievement-date">{date}</p>
    </div>
  );
};

export default AchievementCard;
