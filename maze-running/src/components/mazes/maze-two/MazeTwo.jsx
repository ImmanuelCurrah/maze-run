import { Fragment, useEffect, useState } from "react";
import NavBar from "../../UI/NavBar";
import { grid as MapTwo } from "../maze-two/MazeTwoConstants";
import MapHandler from "../../map/MapHandler";
import Arrow from "../../UI/Arrow";
import { useMap } from "../../hooks/useMap";

import classes from "./MazeTwo.module.css";
import rightArrow from "../../assets/arrows/right-arrow.png";
import leftArrow from "../../assets/arrows/left-arrow.png";
import upArrow from "../../assets/arrows/up-arrow.png";
import downArrow from "../../assets/arrows/down-arrow.png";

export default function MazeOne() {
  const { grid, moveUp, moveDown, moveLeft, moveRight } = useMap(MapTwo);

  return (
    <Fragment>
      <NavBar urlAddress={"Maze Two"} />
      <div className={classes["maze-two"]}>
        <MapHandler grid={grid} />
      </div>
      <Arrow src={rightArrow} onClick={moveRight} direction={7} />
      <Arrow src={leftArrow} onClick={moveLeft} direction={8} />
      <Arrow src={upArrow} onClick={moveUp} direction={3} />
      <Arrow src={downArrow} onClick={moveDown} direction={6} />
    </Fragment>
  );
}
