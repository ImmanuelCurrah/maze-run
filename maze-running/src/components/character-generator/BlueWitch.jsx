import bluewitch from "../assets/characters/blue-witch/blue-witch.gif";
import classes from "./BlueWitch.module.css";

export default function BlueWitch() {
  return (
    <div className={classes.bluewitch}>
      <img src={bluewitch} alt="a picture of a witch png" />
    </div>
  );
}
