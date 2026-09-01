import React from "react";

export const Testimonials = (props) => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Testimonials</span>
          <h2>What our clients say</h2>
        </div>
        <div className="testimonials-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="testimonial-card">
                  <i className="fa fa-quote-left"></i>
                  <p>{d.text}</p>
                  <div className="testimonial-card__meta">
                    <img src={d.img} alt={d.name} />
                    <strong>{d.name}</strong>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </section>
  );
};
