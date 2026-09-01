import React from "react";

export const Services = (props) => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-title section-title--light">
          <span className="eyebrow">Our Services</span>
          <h2>How we help you ship</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="services-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="service-card">
                  <div className="service-card__icon">
                    <i className={d.icon}></i>
                  </div>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </section>
  );
};
