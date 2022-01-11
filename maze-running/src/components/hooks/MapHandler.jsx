import BlueWitch from "../character-generator/BlueWitch";
import FloorTile from "../mapHandlers/FloorTile";
import Wall from "../mapHandlers/Wall";
import EndPoint from "../mapHandlers/EndPoint";

export const useMapHandler = (grid) => {
  const onClick = (event) => {
    console.log(event);
  };

  const mapHandler = grid.map((row, rowID) => {
    return (
      <div key={rowID}>
        {row.map((node, nodeId) => {
          // console.log([node]);
          if (node === 2) {
            return <Wall onClick={onClick} key={nodeId} />;
          } else if (node === 3) {
            return <BlueWitch key={nodeId} />;
          } else if (node === 4) {
            return <EndPoint key={nodeId} />;
          } else {
            return <FloorTile key={nodeId}></FloorTile>;
          }
        })}
      </div>
    );
  });
  return mapHandler;
};
