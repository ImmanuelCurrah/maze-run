import { Fragment, useEffect, useState } from "react";
import NavBar from "../../UI/NavBar";
import { grid } from "../maze-two/MazeTwoConstants";
import { useMapHandler } from "../../hooks/MapHandler";
import classes from "./MazeTwo.module.css";

let length = grid.length;
let loopRow = 0;
let loopCol = 0;

export default function MazeOne() {
  const map = useMapHandler(grid);

  const [toggleMap, setToggleMap] = useState(false);

  const moveUp = (characterNumber) => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (
          grid[i][j] === characterNumber ||
          grid[i][j] === 6 ||
          grid[i][j] === 7 ||
          grid[i][j] === 8
        ) {
          loopRow = i;
          loopCol = j;
        }
      }
    }
    if (grid[loopRow][loopCol - 1] === 2) {
      return;
    } else {
      grid[loopRow][loopCol - 1] = characterNumber;
      grid[loopRow][loopCol] = 1;
    }
    setToggleMap((prevToggle) => !prevToggle);
  };

  const moveDown = (characterNumber) => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (
          grid[i][j] === 3 ||
          grid[i][j] === 6 ||
          grid[i][j] === 7 ||
          grid[i][j] === 8
        ) {
          loopRow = i;
          loopCol = j;
        }
      }
    }
    if (grid[loopRow][loopCol + 1] === 2) {
      return;
    } else {
      grid[loopRow][loopCol + 1] = characterNumber;
      grid[loopRow][loopCol] = 1;
    }
    setToggleMap((prevToggle) => !prevToggle);
  };

  const moveRight = (characterNumber) => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (
          grid[i][j] === 3 ||
          grid[i][j] === 6 ||
          grid[i][j] === 7 ||
          grid[i][j] === 8
        ) {
          loopRow = i;
          loopCol = j;
        }
      }
    }
    if (grid[loopRow + 1][loopCol] === 2) {
      return;
    } else if (grid[loopRow + 1][loopCol] === 4) {
      console.log("you won");
      grid[loopRow + 1][loopCol] = 5;
    } else {
      grid[loopRow + 1][loopCol] = characterNumber;
      grid[loopRow][loopCol] = 1;
    }
    setToggleMap((prevToggle) => !prevToggle);
  };

  const moveLeft = (characterNumber) => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (
          grid[i][j] === 3 ||
          grid[i][j] === 6 ||
          grid[i][j] === 7 ||
          grid[i][j] === 8
        ) {
          loopRow = i;
          loopCol = j;
        }
      }
    }
    if (grid[loopRow - 1][loopCol] === 2) {
      return;
    } else {
      grid[loopRow - 1][loopCol] = characterNumber;
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
      <button
        onClick={() => {
          moveUp(3);
        }}
      >
        Click to move up
      </button>
      <button
        onClick={() => {
          moveDown(6);
        }}
      >
        Click to move down
      </button>
      <button
        onClick={() => {
          moveRight(7);
        }}
      >
        Click to move right
      </button>
      <button
        onClick={() => {
          moveLeft(8);
        }}
      >
        Click to move left
      </button>
    </Fragment>
  );
}
