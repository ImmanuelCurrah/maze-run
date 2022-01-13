import { useState } from "react";

export const useToggle = () => {
  const [toggled, setToggled] = useState(false);

  const toggleHandler = () => {
    setToggled((prevToggle) => {
      return !prevToggle;
    });
  };

  return { toggled, toggleHandler };
};
