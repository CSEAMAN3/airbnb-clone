import React from "react";
import "./Card.css";

import { FaStar } from "react-icons/fa";

export default function Card({ id, coverimg, stats, title, description, price, location, openspots }) {
  let badgeText;

  if (openspots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      <img className="card-img" src={require(`../../images/${coverimg}`)} alt={description} />
      <div className="card-text">
        <div className="card-info">
          <span className="card-info-star card-info-content">
            <FaStar />
          </span>
          <span className="card-info-rating card-info-content">{stats.rating}</span>
          <span className="card-info-review card-info-content">&#40;{stats.reviewcount}&#41;</span>
          <span className="card-info-location card-info-content">&#183; {location}</span>
        </div>
        <h2 className="card-description">{description}</h2>
        <span className="card-price">
          From <span className="price">&#163;{price}</span> / person
        </span>
      </div>
      {badgeText && (
        <div className="badge">
          <span className="soldout-text">{badgeText}</span>
        </div>
      )}
    </div>
  );
}
