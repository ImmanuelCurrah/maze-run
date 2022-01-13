import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import classes from "./NavBar.module.css";

export default function NavBar(props) {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <nav className={classes.nav}>
      <Link className={classes.home} to="/">
        Broom Zoom!
      </Link>
      <div className={classes.home}>{props.urlAddress}</div>
      {toggleHamburger && (
        <div>
          <ul>
            <li>
              <Link to="/highscores">High Scores</Link>
            </li>
          </ul>
        </div>
      )}
      <div
        onClick={() => {
          setToggleHamburger(!toggleHamburger);
        }}
      >
        <Hamburger />
      </div>
    </nav>
  );
}
