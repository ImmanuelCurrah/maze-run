import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <button onClick={props.onClick}>
      <Link to={`/${props.destination}`}>{props.children}</Link>
    </button>
  );
}