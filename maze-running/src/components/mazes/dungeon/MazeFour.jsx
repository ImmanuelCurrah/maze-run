import { Fragment, useEffect } from "react";
import { grid as MapFour } from "../dungeon/MazeFourConstants";
import DungeonMapHandler from "../../map/DungeonMapHandler";
import { useMap } from "../../hooks/useMap";
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
    trueScore,
  } = useMap(MapFour);

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
    setCurrentMazeName("Dungeon");
  });

  return (
    <Fragment>
      <div className={classes["maze-four"]}>
        <DungeonMapHandler grid={grid} />
        <div className={classes.container}>
          <div className={classes.info}>
            <h4>Dungeon</h4>
            <div>{`Score: ${trueScore}`}</div>
            <div>
              <Timer
                startGame={startGame}
                recordTimerHandler={recordTimerHandler}
                grid={MapFour}
              />
            </div>{" "}
            <div className={classes.controls}>
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
        </div>
      </div>
    </Fragment>
  );
}
