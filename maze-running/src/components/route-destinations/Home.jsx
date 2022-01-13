import { useState, Fragment } from "react";
import { useEffect } from "react";
import { useToggle } from "../hooks/useToggler";
import Links from "../Links/Links";
import Button from "../UI/Button";
import NavBar from "../UI/NavBar";

import classes from "./Home.module.css";

export default function Home() {
  const [maze, setMaze] = useState("");

  const { toggled, toggleHandler } = useToggle();

  console.log(toggled);

  return (
    <Fragment>
      <NavBar urlAddress={"Home"} onOpen={toggleHandler} />
      {toggled && <Links />}
      <div className={classes.home}>
        <h1>Welcome to Broom Zoom!</h1>
        <select
          onChange={(e) => {
            setMaze(e.target.value);
          }}
        >
          <option>Select a Maze</option>
          <option>Maze One</option>
          <option>Maze Two</option>
          <option>Maze Three</option>
          <option>Maze Four</option>
        </select>
        <Button destination={maze}>
          <div>Start</div>
        </Button>
      </div>
    </Fragment>
  );
}
