import React from "react";
import { useEffect, useRef } from "react";
// import "./FullStackBanner.css";




const CourseBanner = ({title, description, technologies}) => {

  

          
  return (
  

 
    <div className="banner-container hidden">
      <div className="title-container">
      <h2 className="banner-title" >{title}</h2>
      <p className="banner-subtitle white">{description}</p>
      </div>
      <div className="tech-container">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-item">
            <img src={'https://admin.digitalworldtech.academy/uploads/cohort-courses/images/'+tech.logo} className="tech-logo" /> <span>{tech.name}</span>
          </div>
        ))}
      </div>
  
    </div>

  );
};

export default CourseBanner;
