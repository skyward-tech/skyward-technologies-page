import React from "react";

export const About = (props) => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-media">
            <div className="about-media__frame">
              <img src="img/about.png" alt="Skyward Technologies team" />
            </div>
            <div className="about-badge">
              <i className="fa fa-code"></i>
              <div>
                <strong>Senior Team</strong>
                <span>Engineers only</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow">About Us</span>
            <h2>Software engineering you can build a business on</h2>
            <p>{props.data ? props.data.paragraph : "Loading..."}</p>

            <h3>Why Choose Us?</h3>
            <div className="about-columns">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                      <li key={`${d}-${i}`}>
                        <i className="fa fa-check-circle"></i>
                        {d}
                      </li>
                    ))
                  : "Loading..."}
              </ul>
              <ul>
                {props.data
                  ? props.data.Why2.map((d, i) => (
                      <li key={`${d}-${i}`}>
                        <i className="fa fa-check-circle"></i>
                        {d}
                      </li>
                    ))
                  : "Loading..."}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
