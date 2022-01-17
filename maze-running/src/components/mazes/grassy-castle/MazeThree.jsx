import { Fragment, useEffect } from "react";
import { grid as MapThree } from "../grassy-castle/MazeThreeConstants";
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
    trueScore,
  } = useMap(MapThree);

  const moveCharacter = (e) => {
    if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowUp") {
      moveUp();
    } else if (e.key === "ArrowDown") {
      moveDown();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      moveCharacter(e);
    });
    return () => {
      document.removeEventListener("keydown", (e) => {
        moveCharacter(e);
      });
    };
  }, []);

  useEffect(() => {
    setCurrentMazeName("Grassy Castle");
  });

  return (
    <Fragment>
      <div className={classes["maze-three"]}>
        <MapHandler grid={grid} />
        <div className={classes.controls}>
          <h4>Grassy Castle</h4>
          <div>{`Score: ${trueScore}`}</div>
          <div>
            <Timer
              startGame={startGame}
              recordTimerHandler={recordTimerHandler}
              grid={MapThree}
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
