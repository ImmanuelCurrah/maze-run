import { useState, Fragment } from "react";
import Button from "../UI/Button";
import NavBar from "../UI/NavBar";

import classes from "./Home.module.css";

export default function Home() {
  const [maze, setMaze] = useState("");
  const [character, setCharacter] = useState("");

  return (
    <Fragment>
      <NavBar urlAddress={"Home"} />
      <div className={classes.home}>
        <h1>Welcome to Maze Running!</h1>
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
        <select
          onChange={(e) => {
            setCharacter(e.target.value);
          }}
        >
          <option>Select a Character</option>
          <option>Blue Witch</option>
          <option>Character</option>
          <option>Character</option>
          <option>Character</option>
        </select>
        <Button destination={maze}>
          <div>Start</div>
        </Button>
      </div>
    </Fragment>
  );
}
