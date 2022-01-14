import { Link } from "react-router-dom";
import classes from "./Links.module.css";
import { useToggle } from "../hooks/useToggler";

export default function Links(props) {
  return (
    <div className={classes.border}>
      <div onClick={props.onOpenLinks}>
        <Link className={classes.link} to="/">
          Home
        </Link>
      </div>
      <div onClick={props.onOpenLinks}>
        <Link className={classes.link} to="/highscores">
          High Scores
        </Link>
      </div>
    </div>
  );
}
