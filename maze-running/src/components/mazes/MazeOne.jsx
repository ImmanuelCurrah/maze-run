import { Fragment } from "react";
import NavBar from "../UI/NavBar";
import Node from "../node/Node";
import Wall from "../node/Wall";
import classes from "./MazeOne.module.css";

const GRID_ROW_LENGTH = 10;
const GRID_COL_LENGTH = 10;
let newNode = 1;
let wall = 2;

const grid = [];
for (let row = 0; row < GRID_ROW_LENGTH; row++) {
  const currentRow = [];
  for (let col = 0; col < GRID_COL_LENGTH; col++) {
    if (col === 4 || col === 2) {
      currentRow.push(wall);
    } else {
      currentRow.push(newNode);
    }
  }
  grid.push(currentRow);
  // console.log(currentRow);
}

grid[3][4] = 1;

for (let i = 0; i < grid.length; i++) {
  for (let j = i; j < grid[i].length; j++) {
    grid[1][j] = wall;
    grid[4][j] = wall;
  }
}
grid[4][0] = 1;

export default function MazeOne() {
  return (
    <Fragment>
      <NavBar urlAddress={"Maze One"} />
      <div className={classes.grid}>
        {grid.map((row, rowID) => {
          return (
            <div key={rowID}>
              {row.map((node, nodeId) => {
                if (node === 2) {
                  return <Wall key={nodeId} />;
                } else {
                  return <Node key={nodeId}></Node>;
                }
              })}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
