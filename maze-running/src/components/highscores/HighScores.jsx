import { Fragment, useEffect, useState } from "react";
import api from "../services/apiConfig";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./HighScores.module.css";

export default function HighScores() {
  const [highScores, setHighScores] = useState({});

  let bestScores = [];
  let bestSnowyBlizzard = [];
  let bestBeach = [];
  let bestDungeon = [];
  let bestGrassyCastle = [];

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

  const sortBestScores = () => {
    bestScores.map((score) => {
      if (score.fields.maze === "Beach") {
        // console.log(score);
        return bestBeach.push(score);
      } else if (score.fields.maze === "Snowy Blizzard") {
        return bestSnowyBlizzard.push(score);
      } else if (score.fields.maze === "Dungeon") {
        return bestDungeon.push(score);
      } else if (score.fields.maze === "Grassy Castle") {
        return bestGrassyCastle.push(score);
      }
    });
    bestBeach.sort((a, b) => {
      return a.fields.score - b.fields.score;
    });
    bestSnowyBlizzard.sort((a, b) => {
      return a.fields.score - b.fields.score;
    });
    bestDungeon.sort((a, b) => {
      return a.fields.score - b.fields.score;
    });
    bestGrassyCastle.sort((a, b) => {
      return a.fields.score - b.fields.score;
    });
  };
  sortBestScores();

  return (
    <Fragment>
      <div className={classes.highscores}>
        <Card>
          <h3>Best of All</h3>
          <h4>{`${finalHighScores[0]?.fields.maze}`}</h4>
          <h4>{finalHighScores[0]?.fields.score}</h4>
          <Button destination={finalHighScores[0]?.id}>See Details</Button>
        </Card>
        <Card>
          <h3>Best of Snowy Blizzard</h3>
          <h4>{bestSnowyBlizzard[0]?.fields.maze}</h4>
          <h4>{bestSnowyBlizzard[0]?.fields.score}</h4>
          <Button destination={bestSnowyBlizzard[0]?.id}>See Details</Button>
        </Card>
        <Card>
          <h3>Best of Beach</h3>
          <h4>{bestBeach[0]?.fields.maze}</h4>
          <h4>{bestBeach[0]?.fields.score}</h4>
          <Button destination={bestBeach[0]?.id}>See Details</Button>
        </Card>
        <Card>
          <h3>Best of Grassy Castle</h3>
          <h4>{bestGrassyCastle[0]?.fields.maze}</h4>
          <h4>{bestGrassyCastle[0]?.fields.score}</h4>
          <Button destination={bestGrassyCastle[0]?.id}>See Details</Button>
        </Card>
        <Card>
          <h3>Best of Dungeon</h3>
          <h4>{bestDungeon[0]?.fields.maze}</h4>
          <h4>{bestDungeon[0]?.fields.score}</h4>
          <Button destination={bestDungeon[0]?.id}>See Details</Button>
        </Card>
      </div>
    </Fragment>
  );
}
