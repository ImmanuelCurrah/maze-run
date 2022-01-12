import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <nav>
      <Link to="/">Maze Running!</Link>
      <div>{props.urlAddress}</div>
      <Link to="/highscores">High Scores</Link>
    </nav>
  );
}
