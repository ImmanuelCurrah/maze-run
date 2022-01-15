import { Fragment } from "react/cjs/react.production.min";
import { Routes, Route } from "react-router-dom";
import { useToggle } from "./components/hooks/useToggler";
import Home from "./components/route-destinations/Home";
import MazeOne from "./components/mazes/maze-one/MazeOne";
import MazeTwo from "./components/mazes/maze-two/MazeTwo";
import MazeThree from "./components/mazes/maze-three/MazeThree";
import MazeFour from "./components/mazes/maze-four/MazeFour";
import HighScores from "./components/highscores/HighScores";
import HighScoreDetails from "./components/highscores/HighScoreDetails";
import NavBar from "./components/UI/NavBar";
import Links from "./components/Links/Links";

function App() {
  const { toggled, toggleHandler } = useToggle();

  return (
    <Fragment>
      <NavBar onOpenLinks={toggleHandler} />
      {toggled && <Links onOpenLinks={toggleHandler} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maze%20One" element={<MazeOne />} />
        <Route path="/Beach" element={<MazeTwo />} />
        <Route path="/Grassy%20Castle" element={<MazeThree />} />
        <Route path="/Dungeon" element={<MazeFour />} />
        <Route path="/highscores" element={<HighScores />} />
        <Route path="/:id" element={<HighScoreDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
