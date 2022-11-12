import React, { useState } from "react";
import "../App.css";
import star from "../images/icon-star.svg";

const RatePage = ({ handleSubmit }) => {
  const [rate, setRate] = useState(null);
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
      <div>
        {ratings.map((i) => (
          <button key={i}>{i}</button>
        ))}
      </div>
      <button>Submit</button>
    </div>
  );
};

export default RatePage;
