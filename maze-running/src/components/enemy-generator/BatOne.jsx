import classes from "./Bat.module.css";
import bat from "../assets/enemies/bat.gif";

export default function BatOne() {
  return (
    <div className={classes.grassy}>
      <img src={bat} alt="a flying pixel bat" />
    </div>
  );
}
