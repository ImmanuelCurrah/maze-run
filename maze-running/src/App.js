import { Fragment, useState } from "react/cjs/react.production.min";
import { Routes, Route } from "react-router-dom";
import Home from "./components/route-destinations/Home";
import MazeOne from "./components/mazes/maze-one/MazeOne";
import MazeTwo from "./components/mazes/maze-two/MazeTwo";
import MazeThree from "./components/mazes/maze-three/MazeThree";
import MazeFour from "./components/mazes/maze-four/MazeFour";
import HighScores from "./components/highscores/HighScores";
import HighScoreDetails from "./components/highscores/HighScoreDetails";
import Links from "./components/Links/Links";
import { useToggle } from "./components/hooks/useToggler";

function App() {
  const { toggled, toggleHandler } = useToggle();

  console.log(toggled);

  return (
    <Fragment>
      {toggled && <Links />}
      <button onClick={toggleHandler}>toggle</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maze%20One" element={<MazeOne />} />
        <Route path="/Maze%20Two" element={<MazeTwo />} />
        <Route path="/Maze%20Three" element={<MazeThree />} />
        <Route path="/Maze%20Four" element={<MazeFour />} />
        <Route path="/maze-random" element={"Random Maze"} />
        <Route path="/highscores" element={<HighScores />} />
        <Route path="/:id" element={<HighScoreDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
