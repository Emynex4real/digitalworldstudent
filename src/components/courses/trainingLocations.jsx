import React from "react";
const TrainingLocations = () => {
  return (
    <div className="training-cont hidden">
      <h2 className="training-title">
        You can join the training in 3 spaces across the State
      </h2>
      <div className="training-locations">
        <div className="location"><span>📍</span> Ikorodu Garage</div>
        <div className="location"><span>📍</span> Agric Ikorodu</div>
        <div className="location"><span>📍</span> Ikorodu Benson</div>
        {/* <div className="location"><span>📍</span> Festac</div>
        <div className="location"><span>📍</span> Abuja</div> */}
      </div>
    </div>
  );
};

export default TrainingLocations;
