import SnowyFloorTile from "../mapHandlers/snowy-winter-tiles/SnowyFloorTile";
import SnowWallTile from "../mapHandlers/snowy-winter-tiles/SnowWallTile";
import EndPoint from "../mapHandlers/chest-tiles/EndPoint";
import FinishedGame from "../mapHandlers/chest-tiles/FinishedGame";
import RedDudeBack from "../character-generator/red-dude/RedDudeBack";
import RedDudeFront from "../character-generator/red-dude/RedDudeFront";
import SnowPrincessRight from "../character-generator/snow-princess/SnowPrincessRight";
import RedDudeLeft from "../character-generator/red-dude/RedDudeLeft";

export default function BeachMapHandler({ grid }) {
  return grid.map((row, rowID) => {
    return (
      <div key={rowID}>
        {row.map((node, nodeId) => {
          if (node === 2) {
            return <SnowWallTile key={nodeId} />;
          } else if (node === 3) {
            return <RedDudeBack key={nodeId} />;
          } else if (node === 6) {
            return <RedDudeFront key={nodeId} />;
          } else if (node === 7) {
            return <SnowPrincessRight key={nodeId} />;
          } else if (node === 8) {
            return <RedDudeLeft key={nodeId} />;
          } else if (node === 4) {
            return <EndPoint key={nodeId} />;
          } else if (node === 5) {
            return <FinishedGame key={nodeId} />;
          } else {
            return <SnowyFloorTile key={nodeId} />;
          }
        })}
      </div>
    );
  });
}
