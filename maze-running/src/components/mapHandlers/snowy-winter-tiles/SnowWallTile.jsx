import classes from "./SnowWallTile.module.css";

export default function SnowWallTile(props) {
  return <div className={classes["floor-tile"]}>{props.children}</div>;
}
