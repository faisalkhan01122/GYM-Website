import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/logo.png";
import Bars from "../Images/bars.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuopen, setmenuopen] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />

      {menuopen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: ".5rem",
            borderRadius: "5px",
          }}
          onClick={() => setmenuopen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setmenuopen(false)}>home </li>
          <li onClick={() => setmenuopen(false)}>programs</li>
          <li onClick={() => setmenuopen(false)}>why us</li>
          <li onClick={() => setmenuopen(false)}>plans</li>
          <li onClick={() => setmenuopen(false)}>testimonails</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
