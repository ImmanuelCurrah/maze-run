import { Fragment, useEffect, useState } from "react";
import api from "../services/apiConfig";
import NavBar from "../UI/NavBar";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./HighScores.module.css";

export default function HighScores() {
  const [highScores, setHighScores] = useState({});

  let record = [];

  if (highScores.data) {
    console.log(highScores.data.records);
    highScores.data.records.map((time) => {
      return record.push(time.fields.time);
    });
  }

  console.log(record);

  useEffect(() => {
    const fetchHighScoresData = async () => {
      let response = await api.get();
      setHighScores(response);
    };
    fetchHighScoresData();
  }, []);

  return (
    <Fragment>
      <NavBar urlAddress={"High Scores"} />
      <div className={classes.highscores}>
        {highScores.data &&
          highScores.data.records.map((score) => {
            return (
              <Card key={score.id}>
                <h4>{`${score.fields.maze}`}</h4>
                <Button destination={score.id}>See Details</Button>
              </Card>
            );
          })}
      </div>
    </Fragment>
  );
}
