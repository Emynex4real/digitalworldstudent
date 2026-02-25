import React from "react";
// import { FaBolt } from "react-icons/fa";
// import {FaBolt} from "react-icons/fa"

import mainImg from "../../assets/images/main img.png"

const ExpertTraining = (props) => {
  return (
    <div className="expert-training hidden">
      <div className="expert-content">
        <h2 className="expert-title orange">Learn from Industry Leaders in Tech</h2>
        <p className="expert-description white">
          Our mentors are experienced professionals, passionate about helping
          you build a successful career in <span>{props.title}</span>
        </p>
        

        <div className="expert-features">
          <div className="feature">
            <div>⚡</div>
            <p>
              Hands-on learning with real-world projects: Work on live projects
              and get practical experience that employers value.
            </p>
          </div>
          <div className="feature">
          <div>⚡</div>
            <p>
              Personalized mentorship: Get one-on-one guidance from experienced
              professionals who will support your learning journey.
            </p>
          </div>
          <div className="feature">
            <div> ⚡</div>
            <p>
              Flexible learning options: Join our training online or in-person
              at multiple locations, tailored to your convenience.
            </p>
          </div>
        </div>
      </div>

      <div className="expert-image">
        <img
          src={mainImg}
          alt="Expert Training Session"
        />
      </div>
    </div>
  

  );
};

export default ExpertTraining;
