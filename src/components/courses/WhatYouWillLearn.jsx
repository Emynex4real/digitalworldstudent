import React from "react";


const WhatYouWillLearn = ({ title, description, topics }) => {
  return (
    <div className="course-section">
      <h2 className="course-title">{title}</h2>
      <p className="course-description">{description}</p>
      <ul className="course-topics">
        {topics.map((topic, index) => (
          <li key={index} className="course-topic">
            <span className="plus-icon">+</span> {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYouWillLearn;
