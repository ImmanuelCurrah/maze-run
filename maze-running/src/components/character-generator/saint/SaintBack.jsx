import saintBack from "../../assets/characters/saint/saint-back.png";
import classes from "./SaintBack.module.css";

export default function SaintBack() {
  return (
    <div className={classes.saint}>
      <img src={saintBack} alt="a red haired women" />
    </div>
  );
}
