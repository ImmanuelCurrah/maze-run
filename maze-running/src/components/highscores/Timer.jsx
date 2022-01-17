import { useState, useEffect } from "react";
import classes from "./Timer.module.css";
import { useMoveAround } from "../hooks/useRandomMovement";

export default function Timer({ startGame, recordTimerHandler, grid }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [gameTick, setGameTick] = useState(false);

  const { moveAround } = useMoveAround(grid);

  let myInterval;
  let gameTicks;

  useEffect(() => {
    const timerHandler = () => {
      if (startGame === true) {
        myInterval = setInterval(() => {
          setSeconds((prevSecond) => prevSecond + 1);
        }, 1000);
        gameTicks = setInterval(() => {
          setGameTick((prevGameTick) => !prevGameTick);
        }, 600);
      }
    };
    timerHandler();
    return () => {
      clearInterval(myInterval);
      clearInterval(gameTicks);
    };
    //eslint-ignore-next-line
  }, [startGame]);

  useEffect(() => {
    recordTimerHandler(seconds, minutes);
    // moveAroundBat(10);
    //eslint-ignore-next-line
  }, [seconds]);

  useEffect(() => {
    moveAround(10);
    moveAround(11);
    moveAround(13);
  }, [gameTick]);

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
