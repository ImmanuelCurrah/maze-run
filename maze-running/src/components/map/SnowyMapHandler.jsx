import SnowyFloorTile from "../mapHandlers/snowy-winter-tiles/SnowyFloorTile";
import SnowWallTile from "../mapHandlers/snowy-winter-tiles/SnowWallTile";
import EndPoint from "../mapHandlers/chest-tiles/EndPoint";
import FinishedGame from "../mapHandlers/chest-tiles/FinishedGame";
import SnowPrincessBack from "../character-generator/snow-princess/SnowPrincessBack";
import SnowPrincessFront from "../character-generator/snow-princess/SnowPrincessFront";
import SnowPrincessRight from "../character-generator/snow-princess/SnowPrincessRight";
import SnowPrincessLeft from "../character-generator/snow-princess/SnowPrincessLeft";
import Bat from "../enemy-generator/Bat";

export default function BeachMapHandler({ grid }) {
  return grid.map((row, rowID) => {
    return (
      <div key={rowID}>
        {row.map((node, nodeId) => {
          if (node === 2) {
            return <SnowWallTile key={nodeId} />;
          } else if (node === 3) {
            return <SnowPrincessBack key={nodeId} />;
          } else if (node === 6) {
            return <SnowPrincessFront key={nodeId} />;
          } else if (node === 7) {
            return <SnowPrincessRight key={nodeId} />;
          } else if (node === 8) {
            return <SnowPrincessLeft key={nodeId} />;
          } else if (node === 4) {
            return <EndPoint key={nodeId} />;
          } else if (node === 5) {
            return <FinishedGame key={nodeId} />;
          } else if (node === 10) {
            return <Bat key={nodeId} />;
          } else {
            return <SnowyFloorTile key={nodeId} />;
          }
        })}
      </div>
    );
  });
}
