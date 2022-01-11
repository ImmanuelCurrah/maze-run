import { Fragment } from "react/cjs/react.production.min";
import { Routes, Route } from "react-router-dom";
import Home from "./components/route-destinations/Home";
import MazeOne from "./components/mazes/maze-one/MazeOne";
import MazeTwo from "./components/mazes/maze-two/MazeTwo";
import MazeThree from "./components/mazes/maze-three/MazeThree";
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
