import React, { useEffect } from "react";
import "./Header.css";
import SvgBerwyn from "../SvgBerwyn/SvgBerwyn";
import { Typewriter } from "../../assets/js/index";

export const Header = () => {
  useEffect(() => {
    Typewriter();
  }, []);

  return (
    <div className="first_scene">
      <div className="width__setting">
        <div className="header_content">
          <div className="header_icon">BERWYN</div>
          <div className="header_options">
            <li>
              <a href="#stories">Profile</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </div>
        </div>
      </div>

      <div className="first_scene_content">
        <SvgBerwyn />
        <div className="right_content">
          <div className="sectionOne">
            <div className="container_hello">
              <p>//Hello I Make</p>
              <p className="typing">Animation</p>
            </div>
          </div>
          <div className="sectionTwo">
            <div className="container_details">
              I am college student, who fuelled by passion for creating webapps.
              Who loves designing and creating creative stuffs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
