import React from "react";
import "./HeroImage.css";

const HeroImage = props => {
  console.log(props.image);
  return (
    <div
      className="rmdb-heroimage"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="rmdb-heroimage-content">
        <div className="rmdb-heroimage-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
