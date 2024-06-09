import React from "react";
import "./Reason.css";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import nb from "../Images/nb.png";
import addidas from "../Images/adidas.png";
import nike from "../Images/nike.png";
import tick from "../Images/tick.png";
const Reason = () => {
  return (
    <div className="Reason" id="reason">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reason</span>
        <div>
          <span className="stroke-text">why us</span>
          <span> choose us?</span>
        </div>
        <div className="detailes-r">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ fontWeight: "normal", color: "gray" }}>Our Partner</span>
        <div className="partner">
          <img src={nb} alt="" />
          <img src={addidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reason;
