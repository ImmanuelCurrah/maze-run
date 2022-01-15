import princessFront from "../../assets/characters/snowy-princess/snowy-princess-front.png";
import classes from "./SnowPrincessRight.module.css";

export default function SnowPrincessFront() {
  return (
    <div className={classes.princess}>
      <img src={princessFront} alt="a pink hair princess" />
    </div>
  );
}
