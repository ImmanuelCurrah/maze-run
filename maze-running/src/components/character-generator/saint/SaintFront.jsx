import saintFront from "../../assets/characters/saint/saint-front.png";
import classes from "./SaintFront.module.css";

export default function SaintFront() {
  return (
    <div className={classes.saint}>
      <img src={saintFront} alt="a red haired women" />
    </div>
  );
}
