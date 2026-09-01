import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <a href={largeImage} title={title} className="portfolio-item">
      <img src={smallImage} alt={title} />
      <div className="portfolio-item__overlay">
        <h4>{title}</h4>
      </div>
    </a>
  );
};
