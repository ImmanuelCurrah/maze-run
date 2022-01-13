import { useState } from "react";
import { useGetHighScoresUpdate } from "./useHighScoresUpdate";
import { useNavigate } from "react-router-dom";

export const useMap = (map) => {
  const [grid, setGrid] = useState(map);
  const [toggleMap, setToggleMap] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [stopGame, setStopGame] = useState(false);

  // console.log(stopGame);

  const [lastSecond, setLastSecond] = useState(0);
  const [lastMinute, setLastMinute] = useState(0);

  const [currentMazeName, setCurrentMazeName] = useState("");

  const { timeHandler } = useGetHighScoresUpdate(stopGame);

  const navigate = useNavigate();

  const recordTimerHandler = (seconds, minutes) => {
    if (stopGame === false) {
      setLastSecond(seconds);
      setLastMinute(minutes);
      timeHandler(lastSecond, lastMinute, currentMazeName);
    } else {
      return;
    }
  };

  // MOVE UP
  const moveUp = (characterNumber) => {
    let length = grid.length;
    let loopRow = 0;
    let loopCol = 0;

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
      const newGrid = grid;
      newGrid[loopRow][loopCol - 1] = characterNumber;
      newGrid[loopRow][loopCol] = 1;
      setGrid(newGrid);
    }
    setToggleMap((prevToggle) => !prevToggle);
  };

  //MOVE DOWN
  const moveDown = (characterNumber) => {
    let length = grid.length;
    let loopRow = 0;
    let loopCol = 0;

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
      const newGrid = grid;
      grid[loopRow][loopCol + 1] = characterNumber;
      grid[loopRow][loopCol] = 1;
      setGrid(newGrid);
    }
    setToggleMap((prevToggle) => !prevToggle);
  };

  //MOVE RIGHT
  const moveRight = (characterNumber) => {
    let length = grid.length;
    let loopRow = 0;
    let loopCol = 0;

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
      grid[loopRow + 1][loopCol] = 5;
      grid[loopRow][loopCol] = characterNumber;
      setStopGame(true);
      setTimeout(() => {
        navigate("/highscores");
      }, 100);
    } else {
      const newGrid = grid;
      grid[loopRow + 1][loopCol] = characterNumber;
      grid[loopRow][loopCol] = 1;
      setGrid(newGrid);
    }
    setToggleMap((prevToggle) => !prevToggle);
    setStartGame(true);
  };

  //MOVE LEFT
  const moveLeft = (characterNumber) => {
    let length = grid.length;
    let loopRow = 0;
    let loopCol = 0;

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
      const newGrid = grid;
      grid[loopRow - 1][loopCol] = characterNumber;
      grid[loopRow][loopCol] = 1;
      setGrid(newGrid);
    }
    setToggleMap((prevToggle) => !prevToggle);
  };
  return {
    grid,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    startGame,
    recordTimerHandler,
    stopGame,
    setCurrentMazeName,
    setStopGame,
  };
};
