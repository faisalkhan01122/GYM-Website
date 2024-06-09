import React from "react";
import { PlansData } from "../Data/PlansData";
import whitetick from '../Images/whiteTick.png'
import "./Plans.css";

const Plans = () => {
  return (
    <div className="plans-container">
  <div className="blur plans-blur"></div>
  <div className="blur plansc"></div>
      <div className="plans-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">JOIN WITHUS</span>
      </div>
      {/*Plans-Card------------*/}
      <div className="plans-card">
        {PlansData.map((plans, i) => (
          <div className="plans" key={i}>
            {plans.icon}
            <span>{plans.name}</span>
            <span>${plans.price}</span>
            <div className="features">
              {plans.features.map((feature,i)=>(
            <div className="feature">
            <img src={whitetick} alt="" />
            <span key={i}>{feature}</span>
            </div>
              ))}
            </div>
            <div>
              <span>See more benifites -{'>'} </span>
            </div>
          <button className="btn">join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
