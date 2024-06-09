import React, { useState } from "react";
import { TestimonialsData } from "../Data/TestimonailsData";
import leftArrow from "../Images/leftArrow.png";
import rightArrow from "../Images/rightArrow.png";
import "./Testimonails.css";

const Testimonails = () => {
  const [selected, setselected] = useState(0);
  const tlenght = TestimonialsData.length;
  return (
    <div className="testimonails">
      <div className="left-t">
        <span>testimonails</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <span>{TestimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "orange" }}>
            {TestimonialsData[selected].name}
          </span>
          {" - "}
          {TestimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={TestimonialsData[selected].image} alt="" />
        <div className="arrow">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              selected === 0
                ? setselected(tlenght - 1)
                : setselected((prev) => prev - 1);
            }}
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              selected === tlenght - 1
                ? setselected(0)
                : setselected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
