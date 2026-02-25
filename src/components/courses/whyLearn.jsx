import React from "react";


const LearnWithUs = (props) => {
  return (
    <div className="learn-container hidden">
      <div className="learn-header">
        <h2>Unlock Your <span>{props.title}</span> Career</h2>
        <p>
          Gain hands-on experience with expert-led training and real-world projects. 
          Join a thriving tech community and build the future.
        </p>

      </div>

      <div className="learn-stats">
        <div className="stat-box">
          <h3>Top-Rated Program</h3>
          <p>Industry-leading <span>{props.title}</span> training with cutting-edge curriculum.</p>
        </div>
        <div className="stat-box">
          <h3>60,000+</h3>
          <p>Students trained globally, building careers in tech.</p>
        </div>
        <div className="stat-box">
          <h3>85% Job Placement</h3>
          <p>Our graduates secure jobs within 6 months of completion.</p>
        </div>
        <div className="stat-box">
          <h3>9.8/10</h3>
          <p>Average satisfaction rating from students and employers.</p>
        </div>
      </div>
    </div>
  );
};

export default LearnWithUs;
