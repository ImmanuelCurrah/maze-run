import bluewitch from "../assets/characters/blue-witch/blue-witch-front.gif";
import classes from "./BlueWitch.module.css";

export default function BlueWitchFront() {
  return (
    <div className={classes.bluewitch}>
      <img src={bluewitch} alt="a witch on a broom" />
    </div>
  );
}
