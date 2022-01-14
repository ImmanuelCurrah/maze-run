import { useState, useEffect } from "react";
import api from "../services/apiConfig";

const defaultScore = {
  score: 0,
  time: "",
  maze: "",
};

export const useGetHighScoresUpdate = (stopGame) => {
  const [endTime, setEndTime] = useState(defaultScore);

  const timeHandler = (seconds, minutes, mazeName, trueScore) => {
    setEndTime((prevTime) => {
      return {
        ...prevTime,
        score: trueScore,
        time:
          seconds < 10
            ? `${minutes}:0${seconds + 1}`
            : `${minutes}:${seconds + 1}`,
        maze: mazeName,
      };
    });
  };
  useEffect(() => {
    if (stopGame === true) {
      console.log(endTime);
      const fields = endTime;
      const updateHighScoresHandler = async () => {
        await api.post("", { fields });
      };
      updateHighScoresHandler();
    } else {
      return;
    }
  }, [stopGame, endTime]);
  return { timeHandler };
};
