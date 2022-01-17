import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";
import classes from "./NavBar.module.css";

export default function NavBar(props) {
  const navigate = useNavigate();

  const returnHome = () => {
    setTimeout(() => {
      navigate("/");
      window.location.reload(false);
    }, 500);
  };
  return (
    <nav className={classes.nav}>
      <div className={classes.home} onClick={returnHome}>
        Maze Running
      </div>
      <div onClick={props.onOpenLinks}>
        <Hamburger />
      </div>
    </nav>
  );
}
