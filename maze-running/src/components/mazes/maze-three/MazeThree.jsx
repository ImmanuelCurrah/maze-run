import { Fragment, useEffect } from "react";
import NavBar from "../../UI/NavBar";
import { grid as MapThree } from "../maze-three/MazeThreeConstants";
import MapHandler from "../../map/MapHandler";
import Arrow from "../../UI/Arrow";
import { useMap } from "../../hooks/useMap";

import classes from "./MazeThree.module.css";
import rightArrow from "../../assets/arrows/right-arrow.png";
import leftArrow from "../../assets/arrows/left-arrow.png";
import upArrow from "../../assets/arrows/up-arrow.png";
import downArrow from "../../assets/arrows/down-arrow.png";
import Timer from "../../highscores/Timer";

export default function MazeThree() {
  const {
    grid,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    startGame,
    recordTimerHandler,
    setCurrentMazeName,
  } = useMap(MapThree);

  useEffect(() => {
    setCurrentMazeName("Maze Three");
  }, []);

  return (
    <Fragment>
      <div className={classes["maze-three"]}>
        <MapHandler grid={grid} />
        <div className={classes.controls}>
          <h4>Maze Three</h4>
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
