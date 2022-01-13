import { Fragment, useEffect } from "react";
import { grid as MapFour } from "../maze-four/MazeFourConstants";
import MapHandler from "../../map/MapHandler";
import { useMap } from "../../hooks/useMap";
import NavBar from "../../UI/NavBar";
import Arrow from "../../UI/Arrow";
import classes from "./MazeFour.module.css";

import rightArrow from "../../assets/arrows/right-arrow.png";
import leftArrow from "../../assets/arrows/left-arrow.png";
import upArrow from "../../assets/arrows/up-arrow.png";
import downArrow from "../../assets/arrows/down-arrow.png";
import Timer from "../../highscores/Timer";

export default function MazeOne() {
  const {
    grid,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    startGame,
    recordTimerHandler,
    setCurrentMazeName,
  } = useMap(MapFour);

  useEffect(() => {
    setCurrentMazeName("Maze Four");
  }, []);

  return (
    <Fragment>
      <NavBar urlAddress={"Maze Four"} />
      <div className={classes["maze-four"]}>
        <MapHandler grid={MapFour} />
        <div className={classes.controls}>
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
