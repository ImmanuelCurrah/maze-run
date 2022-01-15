import princessBack from "../../assets/characters/snowy-princess/snowy-princess-back.png";
import classes from "./SnowPrincessRight.module.css";

export default function SnowPrincessBack() {
  return (
    <div className={classes.princess}>
      <img src={princessBack} alt="a pink hair princess" />
    </div>
  );
}
