import { Fragment } from "react";
import { useMapHandler } from "../../hooks/MapHandler";
import { grid } from "./MazeOneConstants";
import NavBar from "../../UI/NavBar";
import BlueWitch from "../../character-generator/BlueWitch";
import classes from "./MazeOne.module.css";

export default function MazeOne() {
  const map = useMapHandler(grid);

  return (
    <Fragment>
      <NavBar urlAddress={"Maze One"} />
      <div className={classes.grid}>{map}</div>
      <BlueWitch />
    </Fragment>
  );
}
