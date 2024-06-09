import React from "react";
import "./Hero.css";
import Header from "./Header";
import hero_image from "../../Components/Images/hero_image.png";
import hero_image_back from "../../Components/Images/hero_image_back.png";
import heart from "../../Components/Images/heart.png";
import calories from "../../Components/Images/calories.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-side">
          <Header />
          {/*the Best Ad */}
          <div className="the-best-ad">
            <div></div>
            <span>The Best Fitness Clube In The Town </span>
          </div>
          {/*Hero-text*/}
          <div className="hero-text">
            <div>
              <span className="stroke-text">shape </span>
              <span> Yours</span>
              <div>
                <span>ideal body</span>
                </div>
              <div>
                <span>
                  In here we will help you to shape and build your ideal body
                  and live up your life to fullest
                </span>
              </div>
            </div>
          </div>
          {/*figurs-------*/}
          <div className="figure">
            <div>
              <span>+ 140</span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>+ 978</span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>+ 50</span>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>
          {/*hero-button*/}
          <div className="hero-button">
            <button className="btn">get started</button>
            <button className="btn">learn more</button>
          </div>
        </div>
        <div className="right-side">
          <button className="btn">Join Now</button>

          <div className="heart-rate">
          <img src={heart} alt="" />
            <span>heart rate</span>
            <span className="span">116 bpm</span>
          </div>
          {/*hero-images*/}
          <img src={hero_image} alt="Hero-image" className="hero-image" />
          <img src={hero_image_back} alt="Hero-image" className="hero-image-back" />
        {/*calries*/}
        <div className="calories">
        <img src={calories} alt="" />
          <div>
          <span>calories buren</span>
          <span>220 kcal</span>
          </div>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default Hero;
