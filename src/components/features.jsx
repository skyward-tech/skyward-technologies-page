import React from "react";

export const Features = (props) => {
  return (
    <section id="features">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Why Skyward</span>
          <h2>Everything you need from an engineering partner</h2>
          <p>
            From architecture to delivery, we bring the tools and discipline of
            a senior engineering team to every project.
          </p>
        </div>
        <div className="features-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="feature-card">
                  <div className="feature-card__icon">
                    <i className={d.icon}></i>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
