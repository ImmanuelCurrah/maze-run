import reddude from "../../assets/characters/red-dude/red-dude-front.png";
import classes from "./RedDudeFront.module.css";

export default function RedDudeFront() {
  return (
    <div className={classes.dude}>
      <img src={reddude} alt="a mario looking sprite" />
    </div>
  );
}
