import reddude from "../../assets/characters/red-dude/red-dude-back.png";
import classes from "./RedDudeBack.module.css";

export default function RedDudeBack() {
  return (
    <div className={classes.dude}>
      <img src={reddude} alt="a mario looking sprite" />
    </div>
  );
}
