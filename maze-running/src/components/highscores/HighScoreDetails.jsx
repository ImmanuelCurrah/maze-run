import api from "../services/apiConfig";
import { useEffect, useState } from "react";
import {
  useParams,
  Navigate,
  useNavigationType,
  useNavigate,
} from "react-router-dom";
import Button from "../UI/Button";

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
    <div>
      <h1>High Score Detail</h1>
      <h4>{singleScore.name}</h4>
      <h4>{singleScore.score}</h4>
      <h4>{singleScore.time}</h4>
      <Button onClick={deleteScore}>Delete Score</Button>
    </div>
  );
}
