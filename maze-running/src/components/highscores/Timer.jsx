import { useState, useEffect } from "react";
import classes from "./Timer.module.css";

export default function Timer({ startGame, recordTimerHandler, moveAround }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let myInterval;

  useEffect(() => {
    const timerHandler = () => {
      if (startGame === true) {
        myInterval = setInterval(() => {
          setSeconds((prevSecond) => prevSecond + 1);
        }, 1000);
      }
    };
    timerHandler();
    return () => {
      clearInterval(myInterval);
    };
    //eslint-ignore-next-line
  }, [startGame]);

  useEffect(() => {
    recordTimerHandler(seconds, minutes);
    moveAround(10);
    //eslint-ignore-next-line
  }, [seconds]);

  if (seconds === 60) {
    setMinutes((prevMinute) => prevMinute + 1);
    setSeconds(0);
  }

  return (
    <div>
      <div className={classes.timer}>
        {seconds <= 9 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`}
      </div>
    </div>
  );
}
