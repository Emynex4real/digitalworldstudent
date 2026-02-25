import React from "react";
// import "./WebDevTraining.css";
import laptop from "../../assets/images/laptop_mac.png";
import align from "../../assets/images/align.png";
import calender from "../../assets/images/calendar.png";
import timeAuto from "../../assets/images/time_auto.png";
import school from "../../assets/images/school.png";

const TrainingInfo = ({
  title,
  description,
  duration,
  schedule,
  format,
  benefits,
  buttonText,
  imageSrc,
  advisorForm
}) => {
  return (
    <div className="training-container hidden">
      <div className="training-content">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <ul className="details">
          <li><img src={timeAuto} alt="icon" /> <strong>Duration:</strong> {duration}</li>
          <li><img src={calender} alt="icon" /> <strong>Schedule:</strong> {schedule}</li>
          <li><img src={laptop} alt="icon" /> <strong>Format:</strong> {format}</li>
          <li><img src={school} alt="icon" /> <strong>Benefits:</strong> {benefits}</li>
        </ul>
        <button onClick={advisorForm} className="cta-button">{buttonText}</button>
      </div>
      <div className="training-image">
        <img src={imageSrc} alt="Training Program" />
      </div>
    </div>
  );
};

export default TrainingInfo;
