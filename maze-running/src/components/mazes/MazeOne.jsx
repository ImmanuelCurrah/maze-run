import { Fragment } from "react";
import NavBar from "../UI/NavBar";
import Node from "../node/Node";
import "./MazeOne.css";

const GRID_ROW_LENGTH = 10;
const GRID_COL_LENGTH = 10;
let newNode;

const grid = [];
for (let row = 0; row < GRID_ROW_LENGTH; row++) {
  const currentRow = [];
  for (let col = 0; col < GRID_COL_LENGTH; col++) {
    currentRow.push(newNode);
  }
  grid.push(currentRow);
}

export default function MazeOne() {
  return (
    <Fragment>
      <NavBar urlAddress={"Maze One"} />
      <div className="grid">
        {grid.map((row, rowID) => {
          return (
            <div key={rowID}>
              {row.map((node, nodeId) => {
                return <Node key={nodeId}></Node>;
              })}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
