import React from "react";

const features = [
    {
      icon: "🚀",
      title: "Engaging & Interactive Learning",
      description: "Work on real-world projects, collaborate with peers, and enhance your skills through teamwork.",
    },
    {
      icon: "⚡",
      title: "Hands-on & Practical Courses",
      description: "Learn by doing with engaging exercises, real challenges, and interactive lessons that keep you motivated.",
    },
    {
      icon: "♟",
      title: "Immersive & Enriching Environment",
      description: "Join exclusive workshops, network with experts, and develop skills that set you apart in your career.",
    },
    {
      icon: "🔥",
      title: "Personalized & Flexible Learning",
      description: "Choose between live sessions and on-demand lessons, set your own pace, and optimize your learning experience.",
    },
  ];
  
  const LearningExperience = ({advisorForm}) => {
    return (
      <div className="learning-container">
        <h2 className="learning-title">Discover a Smarter Way to Learn</h2>
        <p className="learning-subtitle">Unlock the full potential of modern education with our innovative approach.</p>
        <div className="feature-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card logo hidden">
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}

        </div>
            <button onClick={advisorForm} className="cta-button-expert" >Contact Course Advisor</button>
      </div>
    );
  };
  
  export default LearningExperience;
  