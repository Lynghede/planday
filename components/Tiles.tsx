import "../node_modules/react-tiles-dnd/esm/index.css";
import type { RenderTileFunction } from "../lib/react-tiles-dnd/types/index";
import { TilesContainer } from "../lib/react-tiles-dnd/index";
import Image from "next/image";
import { useState } from "react";
// Data
import Data from "../lib/planday";
// Components
import Card from "./Card";
import { title } from "process";

let int = 0;
function generateId(i: number) {
  return (int = i + 1);
}

/** Maps over the data, to create a tile for each item in the data
 * Returns an array.
 */
const tiles = Data.map((item) => ({
  text: item.title,
  id: generateId(int),
  cols: 1,
  rows: 1,
  ...item,
}));

const render: RenderTileFunction<typeof tiles[0]> = ({ data, isDragging }) => {
  //   console.log("tile data", data);

  return (
    <div style={{ padding: "var(--s0)", width: "100%" }}>
      <div
        className={`tile ${isDragging ? "dragging" : ""}`}
        style={{ width: "100%", height: "100%" }}
      >
        <Card data={data} />
        {/* <Image
          src={data.imagePath}
          alt={data.description}
          layout="fill"
          objectFit="cover"
          style={{ pointerEvents: "none" }}
        /> */}
      </div>
    </div>
  );
};

const tileSize = (tile: typeof tiles[0]) => ({
  colSpan: tile.cols,
  rowSpan: tile.rows,
});

function Mollen() {
  const [query, setQuery] = useState("");

  const filteredTiles =
    query.length === 0
      ? tiles
      : tiles.filter((tile) => tile.title.includes(query));

  return (
    <div className="tiles">
      <form>
        <label>Search</label>
        <input
          id="search"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
      <TilesContainer
        data={filteredTiles}
        renderTile={render}
        tileSize={tileSize}
        forceTileWidth={300}
        forceTileHeight={300}
      ></TilesContainer>
    </div>
  );
}

export default Mollen;
