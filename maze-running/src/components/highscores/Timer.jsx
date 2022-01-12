import { useState, useEffect } from "react";

export default function Timer({ startGame }) {
  let timeSecond = 50;
  let timeMinute = 0;

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (startGame === true) {
      setInterval(() => {
        setSeconds((prevSecond) => prevSecond + 1);
        // setEndTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  }, [startGame]);

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
