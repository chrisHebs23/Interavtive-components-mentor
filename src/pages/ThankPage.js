import React from "react";
import thank from "../images/illustration-thank-you.svg";

const ThankPage = ({ rate = 0 }) => {
  return (
    <div className="inner-container thank-you-container">
      <img src={thank} alt="Thank you" />
      <p className="selected">You selected {rate} out of 5</p>
      <h2>Thank You!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankPage;
