import { Fragment, useEffect, useState } from "react";
import NavBar from "../../UI/NavBar";
import { grid } from "../maze-two/MazeTwoConstants";
import { useMapHandler } from "../../hooks/MapHandler";
import {
  useMoveRight,
  useMoveLeft,
  useMoveUp,
  useMoveDown,
} from "../../hooks/Movement";
import classes from "./MazeTwo.module.css";

let length = grid.length;
let loopRow = 0;
let loopCol = 0;

export default function MazeOne() {
  const map = useMapHandler(grid);

  const [toggleMap, setToggleMap] = useState(false);

  const moveUp = () => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (grid[i][j] === 3) {
          loopRow = i;
          loopCol = j;
        }
      }
    }
    if (grid[loopRow][loopCol - 1] === 2) {
      return;
    } else {
      grid[loopRow][loopCol - 1] = 3;
      grid[loopRow][loopCol] = 1;
    }
    setToggleMap((prevToggle) => !prevToggle);
  };

  const moveDown = () => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (grid[i][j] === 3) {
          loopRow = i;
          loopCol = j;
        }
      }
    }
    if (grid[loopRow][loopCol + 1] === 2) {
      return;
    } else {
      grid[loopRow][loopCol + 1] = 3;
      grid[loopRow][loopCol] = 1;
    }
    setToggleMap((prevToggle) => !prevToggle);
  };

  const moveRight = () => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (grid[i][j] === 3) {
          loopRow = i;
          loopCol = j;
        }
      }
    }
    if (grid[loopRow + 1][loopCol] === 2) {
      return;
    } else if (grid[loopRow + 1][loopCol] === 4) {
      console.log("you won");
      grid[loopRow + 1][loopCol] = 3;
      grid[loopRow][loopCol] = 1;
    } else {
      grid[loopRow + 1][loopCol] = 3;
      grid[loopRow][loopCol] = 1;
    }
    setToggleMap((prevToggle) => !prevToggle);
  };

  const moveLeft = () => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (grid[i][j] === 3) {
          loopRow = i;
          loopCol = j;
        }
      }
    }
    if (grid[loopRow - 1][loopCol] === 2) {
      return;
    } else {
      grid[loopRow - 1][loopCol] = 3;
      grid[loopRow][loopCol] = 1;
    }
    setToggleMap((prevToggle) => !prevToggle);
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      return grid[i];
    }
  }, [toggleMap]);

  return (
    <Fragment>
      <NavBar urlAddress={"Maze Two"} />
      <div className={classes["maze-two"]}>{map}</div>
      <button onClick={moveUp}>Click to move up</button>
      <button onClick={moveDown}>Click to move down</button>
      <button onClick={moveRight}>Click to move right</button>
      <button onClick={moveLeft}>Click to move left</button>
    </Fragment>
  );
}
