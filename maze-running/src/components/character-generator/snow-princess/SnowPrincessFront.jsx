import princessFront from "../../assets/characters/snowy-princess/snowy-princess-front.png";
import classes from "./SnowPrincess.module.css";

export default function SnowPrincessFront() {
  return (
    <div className={classes.princess}>
      <img src={princessFront} alt="a pink hair princess" />
    </div>
  );
}
