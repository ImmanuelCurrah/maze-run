import reddude from "../../assets/characters/red-dude/red-dude-right.png";
import classes from "./RedDudeRight.module.css";

export default function RedDudeRight() {
  return (
    <div className={classes.dude}>
      <img src={reddude} alt="a mario looking sprite" />
    </div>
  );
}
