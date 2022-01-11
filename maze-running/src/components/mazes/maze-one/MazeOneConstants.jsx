const mapDimensions = {
  rows: 10,
  col: 10,
};

let floorTile = 1;
let wall = 2;
let i = 0;
let j = 0;
let randomNumber = Math.floor(Math.random() * 9);
let secondRandomNumber = Math.floor(Math.random() * 6);

export const grid = [];
for (let row = 0; row < mapDimensions.rows; row++) {
  const currentRow = [];
  for (let col = 0; col < mapDimensions.col; col++) {
    if (col === randomNumber) {
      currentRow.push(wall);
    } else {
      currentRow.push(floorTile);
    }
  }
  grid.push(currentRow);
  // console.log(currentRow);
}

//randomly selects a column to be a wall column
for (i = 0; i < grid.length; i++) {
  for (j = i; j < grid[i].length; j++) {
    grid[randomNumber][j] = wall;
    if (grid[randomNumber][j] === wall) {
      grid[randomNumber][randomNumber - secondRandomNumber] = floorTile;
    }
  }
}
