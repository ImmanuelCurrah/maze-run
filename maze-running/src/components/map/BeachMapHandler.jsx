import SaintBack from "../character-generator/saint/SaintBack";
import DeckTwoTile from "../mapHandlers/beach-tiles/DeckTwoTile";
import OceanTile from "../mapHandlers/beach-tiles/OceanTile";
import EndPoint from "../mapHandlers/EndPoint";
import FinishedGame from "../mapHandlers/FinishedGame";
import SaintFront from "../character-generator/saint/SaintFront";
import RedDudeRight from "../character-generator/red-dude/RedDudeRight";
import SaintLeft from "../character-generator/saint/SaintLeft";
import TopBottomWallTile from "../mapHandlers/dungeon-tiles/TopBottomWallTile";

export default function BeachMapHandler({ grid }) {
  return grid.map((row, rowID) => {
    return (
      <div key={rowID}>
        {row.map((node, nodeId) => {
          if (node === 2) {
            return <OceanTile key={nodeId} />;
          } else if (node === 9) {
            return <TopBottomWallTile key={nodeId} />;
          } else if (node === 3) {
            return <SaintBack key={nodeId} />;
          } else if (node === 6) {
            return <SaintFront key={nodeId} />;
          } else if (node === 7) {
            return <RedDudeRight key={nodeId} />;
          } else if (node === 8) {
            return <SaintLeft key={nodeId} />;
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
