import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--one"></span>
        <span className="hero__glow hero__glow--two"></span>
        <span className="hero__grid"></span>
      </div>

      <div className="hero__container">
        <div className="hero__badge">
          <i className="fa fa-rocket"></i> Custom software, built right
        </div>

        <h1 className="hero__title">
          {props.data ? props.data.title : "Loading"}
          <span className="hero__title-accent">
            {props.data ? props.data.paragraph : ""}
          </span>
        </h1>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary btn--lg page-scroll">
            Start a Project
          </a>
          <a href="#features" className="btn btn--ghost btn--lg page-scroll">
            Explore Features <i className="fa fa-arrow-down"></i>
          </a>
        </div>

        <ul className="hero__highlights">
          <li>
            <i className="fa fa-check-circle"></i> Strategic technology partner
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Transparent, agile delivery
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Senior engineers only
          </li>
        </ul>
      </div>
    </header>
  );
};
