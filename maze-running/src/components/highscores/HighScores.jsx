import { Fragment, useEffect, useState } from "react";
import api from "../services/apiConfig";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./HighScores.module.css";

export default function HighScores() {
  const [highScores, setHighScores] = useState({});

  let bestScores = [];

  useEffect(() => {
    const fetchHighScoresData = async () => {
      let response = await api.get();
      setHighScores(response);
    };
    fetchHighScoresData();
  }, []);

  const sortScores = () => {
    if (highScores.data) {
      highScores.data.records.map((score) => {
        bestScores.push(score);
      });
    }
  };
  sortScores();
  let finalHighScores = bestScores.sort((a, b) => {
    return a.fields.score - b.fields.score;
  });

  return (
    <Fragment>
      <div className={classes.highscores}>
        {finalHighScores.map((score) => {
          return (
            <Card key={score.id}>
              <h4>{`${score.fields.maze}`}</h4>
              <h4>{`a MASSIVE score of: ${score.fields.score}`}</h4>
              <Button destination={score.id}>See Details</Button>
            </Card>
          );
        })}
      </div>
    </Fragment>
  );
}
