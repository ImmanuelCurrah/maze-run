import classes from "./Bat.module.css";
import bat from "../assets/enemies/bat.gif";

export default function Bat() {
  return (
    <div className={classes.beach}>
      <img src={bat} alt="a flying pixel bat" />
    </div>
  );
}
