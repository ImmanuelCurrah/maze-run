import { useState, Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Home.module.css";

export default function Home() {
  const [maze, setMaze] = useState("");

  return (
    <Fragment>
      <div className={classes.desktop}>
        <div className={classes.home}>
          <div className={classes.content}>
            <h1>Welcome to Maze Running!</h1>
            <div>
              <select
                className={classes.select}
                onChange={(e) => {
                  setMaze(e.target.value);
                }}
              >
                <option>Select a Maze</option>
                <option>Snowy Blizzard</option>
                <option>Beach</option>
                <option>Grassy Castle</option>
                <option>Dungeon</option>
              </select>
              <Button destination={maze}>
                <div>Start</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
