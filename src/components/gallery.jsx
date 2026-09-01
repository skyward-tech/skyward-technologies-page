import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Our Work</span>
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="portfolio-grid">
          {props.data
            ? props.data.map((d, i) => (
                <Image
                  key={`${d.title}-${i}`}
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
