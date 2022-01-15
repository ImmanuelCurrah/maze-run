import { Fragment, useEffect } from "react";
import { grid as MapTwo } from "../beach/MazeTwoConstants";
import BeachMapHandler from "../../map/BeachMapHandler";
import Arrow from "../../UI/Arrow";
import { useMap } from "../../hooks/useMap";

import classes from "./MazeTwo.module.css";
import rightArrow from "../../assets/arrows/right-arrow.png";
import leftArrow from "../../assets/arrows/left-arrow.png";
import upArrow from "../../assets/arrows/up-arrow.png";
import downArrow from "../../assets/arrows/down-arrow.png";
import Timer from "../../highscores/Timer";

export default function MazeTwo() {
  const {
    grid,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    startGame,
    recordTimerHandler,
    setCurrentMazeName,
    trueScore,
  } = useMap(MapTwo);

  useEffect(() => {
    setCurrentMazeName("Beach");
  });

  return (
    <Fragment>
      <div className={classes["maze-two"]}>
        <BeachMapHandler grid={grid} />
        <div className={classes.controls}>
          <h4>Beach</h4>
          <div>{`Score: ${trueScore}`}</div>
          <div>
            <Timer
              startGame={startGame}
              recordTimerHandler={recordTimerHandler}
            />
          </div>
          <div className={classes.arrows}>
            <div>
              <Arrow src={upArrow} onClick={moveUp} direction={3} />
            </div>
            <div className={classes["left-right"]}>
              <Arrow src={leftArrow} onClick={moveLeft} direction={8} />
              <Arrow src={rightArrow} onClick={moveRight} direction={7} />
            </div>

            <div>
              <Arrow src={downArrow} onClick={moveDown} direction={6} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
