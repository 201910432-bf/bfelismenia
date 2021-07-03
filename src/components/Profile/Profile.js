import React from "react";
import "./Profile.css";
import profile from "./../../assets/images/profile1.jpg";

function Profile() {
  return (
    <div className="second_scene" id="stories">
      <div className="sections">
        <div className="section__one">
          <img className="imageStyle" src={profile} width="150" />
          <h5>Berwyn Felismenia</h5>
          <p>Gordon College Student</p>
          <span>CCS Student</span>
          <span>Since 2019</span>
        </div>
        <div className="section__two">
          <h5>Contact Information</h5>

          <div className="contact__info">
            <div className="contact__info__">
              <p>09467055940</p>
              <p>bherfelismenia@gmail.com</p>
              <p>201910432@gordoncollege.edu.ph</p>
            </div>
            <div className="contact__info__links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="section__three">
          <h5>Educational Background</h5>
          <div className="edu__info">
            <div className="sub__data">
              <p>2006-2013</p>
              <div className="sch__info">
                <h5>Elementary</h5>
                <p>Calapandayan Integrated School</p>
                <p>Calapandayan Subic, Zambales</p>
              </div>
            </div>
            <div className="sub__data">
              <p>2013-2017</p>
              <div className="sch__info">
                <h5>Junior High School</h5>
                <p>Subic National High School</p>
                <p>Mangan-Vaca Subic, Zambales</p>
              </div>
            </div>
            <div className="sub__data">
              <p>2017-2019</p>
              <div className="sch__info">
                <h5>Senior High School</h5>
                <p>Asian Institute of Computer Studies</p>
                <p>
                  2 nd Flr., BPI Rotonda Bldg., Rizal Ave. West Bajac-Bajac,
                  Olongapo City
                </p>
              </div>
            </div>
            <div className="sub__data">
              <p>2019-Present</p>
              <div className="sch__info">
                <h5>College</h5>
                <p>Gordon College </p>
                <p>
                  Olongapo City Sports Complex, Lungsod ng Olongapo, Zambales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__section">
        <p>HTML</p>
        <p>•</p>
        <p>CSS</p>
        <p>•</p>
        <p>JS</p>
        <p>•</p>
        <p>SQL</p>
        <p>•</p>
        <p>REACT</p>
        <p>•</p>
        <p>ANGULAR</p>
        <p>•</p>
        <p>TYPESCRIPT</p>
      </div>
    </div>
  );
}

export default Profile;
