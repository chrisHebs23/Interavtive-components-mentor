import React, { useState } from "react";
import "../App.css";
import star from "../images/icon-star.svg";

const RatePage = ({ handleSubmit, rate, setRate }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="inner-container">
      <div className="star-div">
        <img src={star} alt="Star icon" className="star-img" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-div">
        {ratings.map((i) => (
          <button
            key={i}
            className={`rating-buttons ${i !== rate ? "" : "active-button"} `}
            onClick={() => setRate(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <button className="submit-button" onClick={() => handleSubmit(rate)}>
        Submit
      </button>
    </div>
  );
};

export default RatePage;
