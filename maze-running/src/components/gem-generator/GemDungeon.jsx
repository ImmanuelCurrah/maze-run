import classes from "./Gem.module.css";
import gemOne from "../assets/gems/gem-one.png";

export default function GemGrassy() {
  return (
    <div className={classes["gem-dungeon"]}>
      <img src={gemOne} alt="a shiny white diamond" />
    </div>
  );
}
