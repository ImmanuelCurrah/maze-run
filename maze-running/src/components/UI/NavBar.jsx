import Hamburger from "./Hamburger";
import classes from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <nav className={classes.nav}>
      <div className={classes.home}>Broom Zoom!</div>
      <div className={classes.home}>Home</div>
      <div onClick={props.onOpen}>
        <Hamburger />
      </div>
    </nav>
  );
}
