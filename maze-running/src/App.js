import { Fragment } from "react/cjs/react.production.min";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import Home from "./components/route-destinations/Home";
import MazeOne from "./components/mazes/MazeOne";
import MazeTwo from "./components/mazes/MazeTwo";
import MazeThree from "./components/mazes/MazeThree";
import MazeFour from "./components/mazes/MazeFour";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maze%20One" element={<MazeOne />} />
        <Route path="/Maze%20Two" element={<MazeTwo />} />
        <Route path="/Maze%20Three" element={<MazeThree />} />
        <Route path="/Maze%20Four" element={<MazeFour />} />
        <Route path="/maze-random" element={"Random Maze"} />
      </Routes>
    </Fragment>
  );
}

export default App;
