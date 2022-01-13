import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <nav className={classes.nav}>
      <Link className={classes.home} to="/">
        Maze Running!
      </Link>
      <div className={classes.home}>{props.urlAddress}</div>
      <Link to="/highscores">High Scores</Link>
    </nav>
  );
}
