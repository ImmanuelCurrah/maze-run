import classes from "./Arrow.module.css";

export default function Arrow(props) {
  return (
    <img
      className={classes.arrow}
      src={props.src}
      onClick={() => {
        props.onClick(props.direction);
      }}
      alt="an arrow button"
    ></img>
  );
}
