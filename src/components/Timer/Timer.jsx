import { useState, useEffect } from "react";

export default function Timer({ minutes = 0, seconds = 0, over, setOver }) {
  const [paused, setPaused] = useState(false);
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

  const reset = () => {
    if (minutes === "" || seconds === "") {
      setTime([1, 0]);
    }
    setTime([parseInt(minutes), parseInt(seconds)]);
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p>{`${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`}</p>
      <div>{over ? "Time's up!" : ""}</div>
      <button onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
      <button onClick={() => reset()}>Restart</button>
    </div>
  );
}
