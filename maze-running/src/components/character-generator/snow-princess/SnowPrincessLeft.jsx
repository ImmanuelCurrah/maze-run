import princessLeft from "../../assets/characters/snowy-princess/snowy-princess-left.png";
import classes from "./SnowPrincess.module.css";

export default function SnowPrincessLeft() {
  return (
    <div className={classes.princess}>
      <img src={princessLeft} alt="a pink hair princess" />
    </div>
  );
}
