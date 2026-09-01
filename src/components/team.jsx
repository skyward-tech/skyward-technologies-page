import React from "react";

export const Team = (props) => {
  return (
    <section id="team">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Our Team</span>
          <h2>Meet the Team</h2>
          <p>The team that makes everything happen.</p>
        </div>
        <div className="team-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="team-card">
                  <div className="team-card__photo">
                    <img src={d.img} alt={d.name} />
                  </div>
                  <div className="team-card__body">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </section>
  );
};
