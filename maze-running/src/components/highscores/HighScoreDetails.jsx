import api from "../services/apiConfig";
import { useEffect, useState, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

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
    //eslint-disabled-next-line
  }, []);

  const deleteScore = async () => {
    await api.delete(params.id);
    navigate("/highscores");
  };

  return (
    <Fragment>
      <div className={classes.highscoredetails}>
        <h1>High Score Detail</h1>
        <Card>
          <h4>{`Score: ${singleScore.score}`}</h4>
          <h4>{`Time :${singleScore.time}`}</h4>
          <h4>{singleScore.maze}</h4>
          <div className={classes.back}>
            <Button onClick={deleteScore}>Delete Score</Button>
            <Button destination={"highscores"}>Back</Button>
          </div>
        </Card>
      </div>
    </Fragment>
  );
}
