import { Link, useNavigate } from "react-router-dom";
import classes from "./Links.module.css";

export default function Links(props) {
  const navigate = useNavigate();

  const returnHome = () => {
    setTimeout(() => {
      navigate("/");
      window.location.reload(false);
    }, 500);
  };

  return (
    <div className={classes.border}>
      <div onClick={props.onOpenLinks}>
        <div className={classes.link} onClick={returnHome}>
          Home
        </div>
      </div>
      <div onClick={props.onOpenLinks}>
        <Link className={classes.link} to="/highscores">
          High Scores
        </Link>
      </div>
    </div>
  );
}
