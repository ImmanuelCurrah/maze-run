import classes from "./Node.module.css";

export default function Node(props) {
  return <div className={classes.node}>{props.children}</div>;
}
