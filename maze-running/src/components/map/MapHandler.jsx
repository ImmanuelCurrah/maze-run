import BlueWitch from "../character-generator/blue-witch/BlueWitch";
import FloorTile from "../mapHandlers/grassy-castle-tiles/FloorTile";
import Wall from "../mapHandlers/grassy-castle-tiles/Wall";
import EndPoint from "../mapHandlers/chest-tiles/EndPoint";
import FinishedGame from "../mapHandlers/chest-tiles/FinishedGame";
import BlueWitchFront from "../character-generator/blue-witch/BlueWitchFront";
import BlueWitchRight from "../character-generator/blue-witch/BlueWitchRight";
import BlueWitchLeft from "../character-generator/blue-witch/BlueWitchLeft";
import Bat from "../enemy-generator/Bat";

export default function MapHandler({ grid }) {
  return grid.map((row, rowID) => {
    return (
      <div key={rowID}>
        {row.map((node, nodeId) => {
          if (node === 2) {
            return <Wall key={nodeId} />;
          } else if (node === 3) {
            return <BlueWitch key={nodeId} />;
          } else if (node === 6) {
            return <BlueWitchFront key={nodeId} />;
          } else if (node === 7) {
            return <BlueWitchRight key={nodeId} />;
          } else if (node === 8) {
            return <BlueWitchLeft key={nodeId} />;
          } else if (node === 4) {
            return <EndPoint key={nodeId} />;
          } else if (node === 5) {
            return <FinishedGame key={nodeId} />;
          } else if (node === 10) {
            return <Bat />;
          } else {
            return <FloorTile key={nodeId}></FloorTile>;
          }
        })}
      </div>
    );
  });
}
