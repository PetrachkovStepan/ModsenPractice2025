import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime, startTimer, stopTimer } from "./reducers";
import "./timer.css";

const Timer = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.time);
  const isRunning = useSelector((state) => state.isRunning);

  const [inputTime, setInputTime] = useState("");

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        dispatch(setTime(time - 1));
      }, 1000);
    } else if (time === 0) {
      dispatch(stopTimer());
    }
    return () => clearInterval(interval);
  }, [isRunning, time, dispatch]);

  const handleStart = () => {
    dispatch(startTimer());
  };

  const handleStop = () => {
    dispatch(stopTimer());
  };

  const handleSetTime = () => {
    dispatch(setTime(Number(inputTime)));
  };

  return (
    <div id="generalContainer">
      <h1>Timer: {time} seconds</h1>
      <input
        type="number"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        placeholder="Set time in seconds"
      />
      <div id="buttonContainer">
        <button onClick={handleSetTime}>Set Time</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
