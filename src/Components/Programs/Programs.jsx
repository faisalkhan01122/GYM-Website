import React from "react";
import "./Programs.css";
import { ProgramsData } from "../Data/ProgramsData";
import rightArrow from "../Images/rightArrow.png";
export const Programs = () => {
  return (
    <div className="programs">
      <div id="program">
        {/*programs-header*/}
        <div className="programs-header">
          <span className="stroke-text">EXPLORE OUR</span>
          <span>programs</span>
          <span className="stroke-text">to shape you</span>
        </div>
        <div className="program-categories">
          {ProgramsData.map((program, i) => (
            <div className="category" key={i}>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>join Now</span>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
