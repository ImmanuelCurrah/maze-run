import { useState, useEffect } from "react";

export default function Timer({ startGame, recordTimerHandler }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let myInterval;

  useEffect(() => {
    const timerHandler = () => {
      if (startGame === true) {
        myInterval = setInterval(() => {
          setSeconds((prevSecond) => prevSecond + 1);
        }, 1000);
      } else {
        return;
      }
    };
    timerHandler();
  }, [startGame]);

  useEffect(() => {
    recordTimerHandler(seconds, minutes);
  }, [seconds]);

  if (seconds === 60) {
    setMinutes((prevMinute) => prevMinute + 1);
    setSeconds(0);
  }

  return (
    <div>
      <div>{`${minutes}:${seconds}`}</div>
    </div>
  );
}
