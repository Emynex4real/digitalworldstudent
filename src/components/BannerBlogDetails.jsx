// src/pages/Team.js
import React from 'react';
// import './banner.css'; // Import CSS
// import bannerImage from '../assets/images/student.png'; // Import the image
import spark from '../assets/images/white spark.png'; // Import the spark image

const BannerBlogdes = ({startText, text, BannerImage}) => {
  return (
    <div className="banner">
      <div className="overlay">
        <img src={BannerImage} alt={startText + " "+ text} className="banner-image" />
        <div className="banner-text blog-banner-text">
          <h1 className='startText blog-detail-banner'>{startText}</h1>
        </div>
      </div>
    </div>
  );
};

export default BannerBlogdes;
