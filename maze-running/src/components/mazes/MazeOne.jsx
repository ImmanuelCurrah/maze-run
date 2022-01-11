import { Fragment } from "react";
import NavBar from "../UI/NavBar";
import Node from "../mapHandlers/Node";
import Wall from "../mapHandlers/Wall";
import BlueWitch from "../character-generator/BlueWitch";
import classes from "./MazeOne.module.css";

const GRID_ROW_LENGTH = 15;
const GRID_COL_LENGTH = 10;
let floorTile = 1;
let wall = 2;
let i = 0;
let j = 0;
let randomNumber = Math.floor(Math.random() * 9);
let secondRandomNumber = Math.floor(Math.random() * 6);

// makes grid and randomly selects a row to be a wall row
const grid = [];
for (let row = 0; row < GRID_ROW_LENGTH; row++) {
  const currentRow = [];
  for (let col = 0; col < GRID_COL_LENGTH; col++) {
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

const mapHandler = grid.map((row, rowID) => {
  return (
    <div key={rowID}>
      {row.map((node, nodeId) => {
        console.log([node]);
        if (node === 2) {
          return <Wall key={nodeId} />;
        } else {
          return <Node key={nodeId}></Node>;
        }
      })}
    </div>
  );
});

export default function MazeOne() {
  return (
    <Fragment>
      <NavBar urlAddress={"Maze One"} />
      <div className={classes.grid}>{mapHandler}</div>
      <BlueWitch />
    </Fragment>
  );
}
