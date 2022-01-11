import bluewitch from "../assets/characters/blue-witch/blue-witch-right.gif";
import classes from "./BlueWitch.module.css";

export default function BlueWitchRight() {
  return (
    <div className={classes.bluewitch}>
      <img src={bluewitch} alt="a picture of a witch png" />
    </div>
  );
}
