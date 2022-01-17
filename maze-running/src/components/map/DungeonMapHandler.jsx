import SaintBack from "../character-generator/saint/SaintBack";
import FloorTileD from "../mapHandlers/dungeon-tiles/FloorTileD";
import LeftRightBorderTile from "../mapHandlers/dungeon-tiles/LeftRightBorderTile";
import EndPoint from "../mapHandlers/chest-tiles/EndPoint";
import FinishedGame from "../mapHandlers/chest-tiles/FinishedGame";
import SaintFront from "../character-generator/saint/SaintFront";
import SaintRight from "../character-generator/saint/SaintRight";
import SaintLeft from "../character-generator/saint/SaintLeft";
import TopBottomWallTile from "../mapHandlers/dungeon-tiles/TopBottomWallTile";
import BatThree from "../enemy-generator/BatThree";
import GemDungeon from "../gem-generator/GemDungeon";

export default function DungeonMapHandler({ grid }) {
  return grid.map((row, rowID) => {
    return (
      <div key={rowID}>
        {row.map((node, nodeId) => {
          if (node === 2) {
            return <LeftRightBorderTile key={nodeId} />;
          } else if (node === 9) {
            return <TopBottomWallTile key={nodeId} />;
          } else if (node === 3) {
            return <SaintBack key={nodeId} />;
          } else if (node === 6) {
            return <SaintFront key={nodeId} />;
          } else if (node === 7) {
            return <SaintRight key={nodeId} />;
          } else if (node === 8) {
            return <SaintLeft key={nodeId} />;
          } else if (node === 4) {
            return <EndPoint key={nodeId} />;
          } else if (node === 5) {
            return <FinishedGame key={nodeId} />;
          } else if (node === 10) {
            return <BatThree key={nodeId} />;
          } else if (node === 11) {
            return <BatThree key={nodeId} />;
          } else if (node === 12) {
            return <GemDungeon key={nodeId} />;
          } else {
            return <FloorTileD key={nodeId}></FloorTileD>;
          }
        })}
      </div>
    );
  });
}
