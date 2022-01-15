import saintLeft from "../../assets/characters/saint/saint-left.png";
import classes from "./Saint.module.css";

export default function SaintLeft() {
  return (
    <div className={classes.saint}>
      <img src={saintLeft} alt="a red haired women" />
    </div>
  );
}
