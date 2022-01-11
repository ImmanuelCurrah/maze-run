import bluewitch from "../assets/characters/blue-witch/blue-witch-left.gif";
import classes from "./BlueWitch.module.css";

export default function BlueWitchLeft() {
  return (
    <div className={classes.bluewitch}>
      <img src={bluewitch} alt="a picture of a witch png" />
    </div>
  );
}
