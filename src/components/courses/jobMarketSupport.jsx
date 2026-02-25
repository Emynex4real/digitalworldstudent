import React from "react";
import { CheckCircle } from "lucide-react";


const supportItems = [
  {
    icon: <CheckCircle size={24} />, 
    text: "Personalized advice to find the opportunity that suits you."
  },
  {
    icon: <CheckCircle size={24} />, 
    text: "A network of partner companies at your disposal."
  },
  {
    icon: <CheckCircle size={24} />, 
    text: "Support for creating your CV and preparing for interviews."
  }
];

const JobMarketSupport = () => {
  return (
    <div className="job-support-container hidden">
      <h2 className="job-support-title">
        Integrate the Job Market with Confidence
      </h2>
      <p className="job-support-subtext">
        Our team dedicated to professional integration supports you in your job search.
      </p>
      <div className="job-support-grid">
        {supportItems.map((item, index) => (
          <div key={index} className="job-support-card">
            {item.icon}
            <p className="job-support-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobMarketSupport;