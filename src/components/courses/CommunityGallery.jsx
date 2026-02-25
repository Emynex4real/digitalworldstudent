import React from "react";

const images = [
  "/path-to-image1.jpg",
  "/path-to-image2.jpg",
  "/path-to-image3.jpg",
];

const CommunityGallery = () => {
  return (
    <div className="community-gallery hidden">
      <h2 className="gallery-title">Our Vibrant Community</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Community ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default CommunityGallery;
