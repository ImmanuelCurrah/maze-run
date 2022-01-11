//move up
export const useWinLogic = (grid) => {
  let length = grid.length;
  let loopRow = 0;
  let loopCol = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (grid[i][j] === 3) {
        loopRow = i;
        loopCol = j;
      }
    }
  }
  if (grid[loopRow][loopCol - 1] === 4) {
    grid[loopRow][loopCol - 1] = 3;
    grid[loopRow][loopCol] = 1;
    console.log("you won!");
  } else if (grid[loopRow][loopCol + 1] === 4) {
    console.log("you won!");
    grid[loopRow][loopCol + 1] = 3;
    grid[loopRow][loopCol] = 1;
  } else if (grid[loopRow + 1][loopCol] === 4) {
    console.log("you won!");
    grid[loopRow + 1][loopCol] = 3;
    grid[loopRow][loopCol] = 1;
    // } else if (grid[loopRow - 1][loopCol] === 4) {
    //   console.log("you won!");
    //   grid[loopRow - 1][loopCol] = 3;
    //   grid[loopRow][loopCol] = 1;
  }
};
