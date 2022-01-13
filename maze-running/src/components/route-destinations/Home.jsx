import { useState, Fragment } from "react";
import Button from "../UI/Button";
import NavBar from "../UI/NavBar";

import classes from "./Home.module.css";

export default function Home() {
  const [maze, setMaze] = useState("");
  const [name, setName] = useState("");

  return (
    <Fragment>
      <NavBar urlAddress={"Home"} />
      <div className={classes.home}>
        <h1>Welcome to Maze Running!</h1>
        <form>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Whats your name?"
          />
        </form>
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
