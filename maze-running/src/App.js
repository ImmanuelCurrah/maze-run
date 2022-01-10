import { Fragment } from "react/cjs/react.production.min";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import Home from "./components/route-destinations/Home";
import MazeOne from "./components/mazes/MazeOne";

function App() {
  return (
    <Fragment>
      <NavBar urlAddress={"Home"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maze%20One" element={<MazeOne />} />
        <Route path="/maze-two" element={"Maze Two"} />
        <Route path="/maze-three" element={"Maze Three"} />
        <Route path="/maze-four" element={"Maze Four"} />
        <Route path="/maze-random" element={"Random Maze"} />
      </Routes>
    </Fragment>
  );
}

export default App;
