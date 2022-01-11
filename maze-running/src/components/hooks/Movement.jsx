let length = 10;
let loopRow = 0;
let loopCol = 0;

export const useMoveUp = (grid) => {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (grid[i][j] === 3) {
        loopRow = i;
        loopCol = j;
      }
    }
  }
  grid[loopRow][loopCol - 1] = 3;
  grid[loopRow][loopCol] = 1;
  // setToggleMap((prevToggle) => !prevToggle);
};

export const useMoveDown = (grid, setToggleMap) => {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (grid[i][j] === 3) {
        loopRow = i;
        loopCol = j;
      }
    }
  }
  grid[loopRow][loopCol + 1] = 3;
  grid[loopRow][loopCol] = 1;
  setToggleMap((prevToggle) => !prevToggle);
};

export const useMoveRight = (grid, setToggleMap) => {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (grid[i][j] === 3) {
        loopRow = i;
        loopCol = j;
      }
    }
  }
  grid[loopRow + 1][loopCol] = 3;
  grid[loopRow][loopCol] = 1;
  setToggleMap((prevToggle) => !prevToggle);
};

export const useMoveLeft = (grid, setToggleMap) => {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (grid[i][j] === 3) {
        loopRow = i;
        loopCol = j;
      }
    }
  }
  grid[loopRow - 1][loopCol] = 3;
  grid[loopRow][loopCol] = 1;
  setToggleMap((prevToggle) => !prevToggle);
};
