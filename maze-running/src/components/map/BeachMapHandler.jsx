import DeckTwoTile from "../mapHandlers/beach-tiles/DeckTwoTile";
import OceanTile from "../mapHandlers/beach-tiles/OceanTile";
import EndPoint from "../mapHandlers/chest-tiles/EndPoint";
import FinishedGame from "../mapHandlers/chest-tiles/FinishedGame";
import RedDudeBack from "../character-generator/red-dude/RedDudeBack";
import RedDudeFront from "../character-generator/red-dude/RedDudeFront";
import RedDudeRight from "../character-generator/red-dude/RedDudeRight";
import RedDudeLeft from "../character-generator/red-dude/RedDudeLeft";

export default function BeachMapHandler({ grid }) {
  return grid.map((row, rowID) => {
    return (
      <div key={rowID}>
        {row.map((node, nodeId) => {
          if (node === 2) {
            return <OceanTile key={nodeId} />;
          } else if (node === 3) {
            return <RedDudeBack key={nodeId} />;
          } else if (node === 6) {
            return <RedDudeFront key={nodeId} />;
          } else if (node === 7) {
            return <RedDudeRight key={nodeId} />;
          } else if (node === 8) {
            return <RedDudeLeft key={nodeId} />;
          } else if (node === 4) {
            return <EndPoint key={nodeId} />;
          } else if (node === 5) {
            return <FinishedGame key={nodeId} />;
          } else {
            return <DeckTwoTile key={nodeId} />;
          }
        })}
      </div>
    );
  });
}
