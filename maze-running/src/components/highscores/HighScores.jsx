import { Fragment, useEffect, useState } from "react";
import api from "../services/apiConfig";
import NavBar from "../UI/NavBar";

export default function HighScores() {
  const [highScores, setHighScores] = useState({});

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
      {highScores.data &&
        highScores.data.records.map((score) => {
          return (
            <div key={score.id}>
              <h2>{`Name: ${score.fields.name}`}</h2>
              <h4>{`Score: ${score.fields.score}`}</h4>
              <h4>{`Time: ${score.fields.time}`}</h4>
            </div>
          );
        })}
    </Fragment>
  );
}
