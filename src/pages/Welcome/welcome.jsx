import React from "react";
import "./welcome.css";
import pic from "../../images/logo.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const Welcome = () => {

  setTimeout(function () {
    window.location.replace("/registration");
  }, 5000);
  return (
    <div className="background">
      <div className="logo">
        <img src={pic} alt="" />
      </div>
      <h1 className="logoName">Royality Nurses</h1>
      <div className="timer">
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={["#abc8ed", "#3d4294", "#17053d"]}
          colorsTime={[5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Welcome;
