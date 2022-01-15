import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import classes from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <nav className={classes.nav}>
      <Link className={classes.home} to="/">
        Maze Running
      </Link>
      <div onClick={props.onOpenLinks}>
        <Hamburger />
      </div>
    </nav>
  );
}
