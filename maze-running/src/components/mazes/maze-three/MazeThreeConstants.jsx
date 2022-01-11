const mapDimensions = {
  rows: 10,
  col: 10,
};

let floorTile = 1;
let wall = 2;
// let i = 0;
// let j = 0;
// let randomNumber = Math.floor(Math.random() * 9);
// let secondRandomNumber = Math.floor(Math.random() * 6);

export const grid = [];
for (let row = 0; row < mapDimensions.rows; row++) {
  const currentRow = [];
  for (let col = 0; col < mapDimensions.col; col++) {
    currentRow.push(floorTile);
  }
  grid.push(currentRow);
}
