import React, { useState } from "react";
import "./OnlineTraining.css";
import onlineImg from "../../assets/images/ChatGPT Image.jpg"

const OnlineTraining = (props) => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="training-section">
      <h2 className="training-heading">
        Learn <span>{props.title}</span> from anywhere in the world
      </h2>
      <p className="training-subtext">
        Join our immersive online training program and master front-end and back-end technologies from the comfort of your home.
      </p>

      <div className="training-video" onClick={toggleVideo}>
        <img
          src={onlineImg}
          alt="Online Training Session"
          className="video-thumbnail"
        />
        <div className="play-button">&#9658;</div>
      </div>

      <div className="training-features">
        <div className="feature">Expert Mentors</div>
        <div className="feature">Flexible Learning</div>
        <div className="feature">Lifetime Access to Recordings</div>
      </div>

      <button onClick={props.advisor} className="download-btn">Contact Course Advisor</button>

      {showVideo && (
        <div className="video-modal" onClick={toggleVideo}>
          <div className="video-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleVideo}>×</button>
            <iframe
              width="100%"
              height="400"
              src="#"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineTraining;
