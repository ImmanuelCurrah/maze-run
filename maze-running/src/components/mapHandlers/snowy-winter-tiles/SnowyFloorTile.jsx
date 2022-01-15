import classes from "./SnowyFloorTile.module.css";

export default function SnowyFloorTile(props) {
  return <div className={classes["floor-tile"]}>{props.children}</div>;
}
