import { Fragment } from "react";
import { useMapHandler } from "../../hooks/MapHandler";
import { grid } from "./MazeThreeConstants";
import NavBar from "../../UI/NavBar";
import classes from "./MazeThree.module.css";

export default function MazeThree() {
  const map = useMapHandler(grid);

  return (
    <Fragment>
      <NavBar urlAddress={"Maze Three"} />
      <div className={classes.grid}>{map}</div>
    </Fragment>
  );
}
