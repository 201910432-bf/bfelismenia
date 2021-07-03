import React from "react";
import "./Works.css";
import wfh from "../../assets/images/wfh.jpg";
import modular from "../../assets/images/modular.jpg";
import services from "../../assets/images/services.jpg";
import webinars from "../../assets/images/webinars.jpg";

function Works() {
  return (
    <div className="third_scene">
      <div className="third__scene__header">
        <h3>OJT Works & Webinars</h3>
      </div>
      <div className="main__content">
        <div className="list__items">
          <div className="item__header">
            <img src={wfh} width="100" />
          </div>
          <div className="item__body">
            <h1>Work Fromt Home</h1>
            <p>
              Work Fromt Home is a work arrangement in which employees do not
              commute or travel to a central place of work, such as an office
              building, warehouse, or store.
            </p>
          </div>
        </div>
        <div className="list__items">
          <div className="item__header">
            <img src={modular} width="100" />
          </div>
          <div className="item__body">
            <h1>Learning Materials</h1>
            <p>
              Learning materials refers to one of four elements of integral
              self-evaluations — in addition to neuroticism, self-efficacy, and
              self-esteem. It can also predict several professional outcomes
              including job performance and job satisfaction with a high degree
              of accuracy
            </p>
          </div>
        </div>
        <div className="list__items">
          <div className="item__header">
            <img src={services} width="100" />
          </div>
          <div className="item__body">
            <h1>Online Jobs</h1>
            <p>
              An online job is any job where you can work from home or a remote
              location, rather than reporting to a set location daily. With a
              variety of fields such as customer service, writing, billing,
              computer programing, and education.
            </p>
          </div>
        </div>
        <div className="list__items">
          <div className="item__header">
            <img src={webinars} width="100" />
          </div>
          <div className="item__body">
            <h1>Webinars</h1>
            <p>
              a webinar is a live, virtual event that is hosted on the internet
              using telecommunications technology. A webinar can be an
              instructive or educational event or a meeting that involves
              audio-visual communication between a speaker and attendees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
