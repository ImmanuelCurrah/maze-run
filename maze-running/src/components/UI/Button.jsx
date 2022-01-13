import { Link } from "react-router-dom";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <Link className={classes.link} to={`/${props.destination}`}>
        {props.children}
      </Link>
    </button>
  );
}
