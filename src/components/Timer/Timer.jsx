import { useState, useEffect } from "react";
import { TimerDiv } from "./Timer.styled";
import PropTypes from "prop-types";

export default function Timer({
  minutes = 0,
  seconds = 0,
  over,
  setOver,
  paused,
}) {
  const [[m, s], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (paused || over) return;
    if (m === 0 && s === 0) {
      setOver(true);
    } else if (s == 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <TimerDiv>
      <p>{`${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`}</p>
      <div>
        <h3>Timer</h3>
      </div>
    </TimerDiv>
  );
}

Timer.protoTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  over: PropTypes.bool.isRequired,
  setOver: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
};
