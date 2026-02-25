import React, { useState } from "react";
import "./testimonials.css";

const TestimonialCard = ({ name, role, image, videoUrl }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <>
      <div className="testimonial-card" onClick={handleOpen}>
        <div className="image-container">
          <img src={image} alt={`${name} testimonial`} className="testimonial-image" />
          <div className="play-button">
            <div className="play-icon">&#9658;</div>
          </div>
          <div className="logo-label">
            <img src="../images/digitworld horizontal logo.svg" alt="Logo" className="logo" />
          </div>
          <div className="name-labels">
            <div className="label-student">{role}</div>
            <div className="label-name">{name}</div>
          </div>
        </div>
      </div>

      {showPopup && (
  <div className="custom-modal-overlay" onClick={handleClose}>
    <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="custom-modal-close" onClick={handleClose}>✕</button>
      <iframe
        width="100%"
        height="400"
        src={`${videoUrl}?autoplay=1`}
        title="Testimonial Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

    </>
  );
};

export default TestimonialCard;