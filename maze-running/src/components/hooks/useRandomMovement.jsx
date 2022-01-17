import { useState, useEffect } from "react";

export const useMoveAround = (map) => {
  const [grid, setGrid] = useState(map);

  const moveAroundBat = (characterNumber) => {
    let length = grid.length;
    let loopRow = 0;
    let loopCol = 0;

    const trueRandomDirection = Math.floor(Math.random() * 8) + 1;
    console.log(trueRandomDirection);

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (grid[i][j] === characterNumber) {
          loopRow = i;
          loopCol = j;
        }
      }
    }

    if (
      grid[loopRow][loopCol - 1] === 3 ||
      grid[loopRow][loopCol + 1] === 3 ||
      grid[loopRow - 1][loopCol] === 3 ||
      grid[loopRow + 1][loopCol] === 3
    ) {
      window.location.reload(false);
      console.log("you lost");
    }

    if (trueRandomDirection === 1 || trueRandomDirection === 8) {
      if (
        grid[loopRow][loopCol - 1] === 2 ||
        grid[loopRow][loopCol - 1] === 4 ||
        grid[loopRow][loopCol - 1] === 9
      ) {
        return;
      } else if (grid[loopRow][loopCol - 1] === 3) {
        console.log("you lost");
      } else {
        const newGrid = grid;
        grid[loopRow][loopCol - 1] = characterNumber;
        grid[loopRow][loopCol] = 1;
        setGrid(newGrid);
      }
    } else if (trueRandomDirection === 2 || trueRandomDirection === 7) {
      if (
        grid[loopRow][loopCol + 1] === 2 ||
        grid[loopRow][loopCol + 1] === 4 ||
        grid[loopRow][loopCol + 1] === 9
      ) {
        return;
      } else if (grid[loopRow][loopCol + 1] === 3) {
        console.log("you lost");
      } else {
        const newGrid = grid;
        grid[loopRow][loopCol + 1] = characterNumber;
        grid[loopRow][loopCol] = 1;
        setGrid(newGrid);
      }
    } else if (trueRandomDirection === 3 || trueRandomDirection === 6) {
      if (
        grid[loopRow - 1][loopCol] === 2 ||
        grid[loopRow - 1][loopCol] === 4 ||
        grid[loopRow - 1][loopCol] === 9
      ) {
        return;
      } else if (grid[loopRow - 1][loopCol] === 3) {
        console.log("you lost");
      } else {
        const newGrid = grid;
        grid[loopRow - 1][loopCol] = characterNumber;
        grid[loopRow][loopCol] = 1;
        setGrid(newGrid);
      }
    } else if (trueRandomDirection === 4 || trueRandomDirection === 5) {
      if (
        grid[loopRow + 1][loopCol] === 2 ||
        grid[loopRow + 1][loopCol] === 4 ||
        grid[loopRow + 1][loopCol] === 9
      ) {
        return;
      } else if (grid[loopRow + 1][loopCol] === 3) {
        console.log("you lost");
      } else {
        const newGrid = grid;
        grid[loopRow + 1][loopCol] = characterNumber;
        grid[loopRow][loopCol] = 1;
        setGrid(newGrid);
      }
    }
  };
  return { moveAroundBat };
};
