import { Link } from "react-router-dom";
import classes from "./Links.module.css";

export default function Links() {
  return (
    <div className={classes.border}>
      <Link className={classes.link} to="/">
        Home
      </Link>
      <Link className={classes.link} to="/highscores">
        High Scores
      </Link>
    </div>
  );
}
