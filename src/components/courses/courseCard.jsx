import React from "react";
import "../../components/courses/main.css"
import laptop from "../../assets/images/laptop_mac.png";
import align from "../../assets/images/align.png";
import calender from "../../assets/images/calendar.png";
import timeAuto from "../../assets/images/time_auto.png";

const CourseCard = ({ title, description, duration, schedule, format, flexibility, imageUrl , advisor, handleBrochure}) => {
  return (
    <div className="course-card-container">
      <div className="course-cards">
        <div className="course-infos">
          <h2 className="course-titles">{title}</h2>
          <p className="course-descriptions">{description}</p>
          <div className="course-buttons">
            <button onClick={handleBrochure} className="brochure-button">Download the Brochure</button>
            <button onClick={advisor} className="advisor-button">Contact an Advisor</button>
          </div>
          <ul className="course-details-main">
            <li> <img src={timeAuto} alt="icon" /> <strong>Duration:</strong> {duration}</li>
            <li> <img src={calender} alt="icon" /> <strong>Schedule:</strong> {schedule}</li>
            <li> <img src={laptop}alt="icon" /> <strong>Format:</strong> {format}</li>
            <li> <img src={align} alt="icon" /> <strong>Flexible:</strong> {flexibility}</li>
          </ul>
        </div>
        <div className="course-images">
          <img src={imageUrl} alt="Student learning web development" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
