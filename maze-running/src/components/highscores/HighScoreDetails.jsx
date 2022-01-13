import api from "../services/apiConfig";
import { useEffect, useState, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import NavBar from "../UI/NavBar";

import classes from "./HighScoreDetails.module.css";

export default function HighScoreDetails() {
  const [singleScore, setSingleScore] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchScoreHandler = async () => {
      let response = await api.get(params.id);
      setSingleScore(response.data.fields);
    };
    fetchScoreHandler();
  }, []);

  const deleteScore = async () => {
    await api.delete(params.id);
    navigate("/highscores");
  };

  return (
    <Fragment>
      <NavBar urlAddress={"Score Details"} />
      <div className={classes.highscoredetails}>
        <h1>High Score Detail</h1>
        <Card>
          <h4>{singleScore.name}</h4>
          <h4>{singleScore.score}</h4>
          <h4>{singleScore.time}</h4>
          <h4>{singleScore.maze}</h4>
          <Button onClick={deleteScore}>Delete Score</Button>
        </Card>
      </div>
    </Fragment>
  );
}
