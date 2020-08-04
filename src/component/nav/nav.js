import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import pic from "../../img/P19_websize.jpg";
const NavBar = () => {
  return (
    <div className="navcontainer">
      <div className="text">
        <img src={pic} alt="logo" className="logo" />
        <h1>Darren Angus</h1>
        <h4>A Full-stack developer</h4>
      </div>

      <div className="link">
        <Link className='active' to="/portfolio">Portfolio</Link>
        <Link to="/my-offer">My Offer</Link>
        <Link to="/contact">Contact Me</Link>
        <Link to="/Portfolio">My CV</Link>
      </div>
    </div>
  );
};

export default NavBar;
