import classes from "./FloorTile.module.css";

export default function FloorTile(props) {
  return <div className={classes["floor-tile"]}>{props.children}</div>;
}
