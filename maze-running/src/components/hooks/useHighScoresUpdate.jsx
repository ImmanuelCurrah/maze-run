import { useState, useEffect } from "react";
import api from "../services/apiConfig";

const defaultScore = {
  name: "Immanuel",
  score: "2000",
  time: "",
  maze: "",
};

export const useGetHighScoresUpdate = (stopGame) => {
  const [endTime, setEndTime] = useState(defaultScore);

  const timeHandler = (seconds, minutes, mazeName) => {
    setEndTime((prevTime) => {
      return {
        ...prevTime,
        time: `${minutes}:${seconds + 1}`,
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
  }, [stopGame]);
  return { timeHandler };
};
