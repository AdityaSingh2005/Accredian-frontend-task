import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
      <div className="logo-container">
        <img src="Frame 95.png" alt="Logo 1" height={"50px"} className="logo" />
      </div>
      <div className="vertical-line"></div>
      <div className="logo-container">
        <img src="accredian-logo-1.png" alt="Logo 2" height={"40px"} className="logo" />
      </div>
    </div>
    )
}

export default Navbar;