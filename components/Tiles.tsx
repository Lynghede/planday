import "../node_modules/react-tiles-dnd/esm/index.css";
import type { RenderTileFunction } from "../lib/react-tiles-dnd/types/index";
import { TilesContainer } from "../lib/react-tiles-dnd/index";
import { useState } from "react";
import styled from "styled-components";
// Data
import Data from "../lib/planday";
// Components
import Card from "./Card";
import { Stack, NewBox } from "../ui/EveryLayout";
import Input from "./Input";

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

/** Single tile component */
const render: RenderTileFunction<typeof tiles[0]> = ({ data, isDragging }) => {
  return (
    <div style={{ padding: "var(--s0)", width: "100%" }}>
      <div
        className={`tile ${isDragging ? "dragging" : ""}`}
        style={{ width: "100%", height: "100%" }}
      >
        <Card data={data} />
      </div>
    </div>
  );
};

const tileSize = (tile: typeof tiles[0]) => ({
  colSpan: tile.cols,
  rowSpan: tile.rows,
});

function Gallery() {
  /** Set the query string for the search input field
   * Type: String
   */
  const [query, setQuery] = useState("");

  /** Filters the tiles based on the query
   * Return a list of objects
   */
  const filteredTiles =
    query.length === 0
      ? tiles
      : tiles.filter((tile) =>
          tile.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="tiles">
      <form>
        <NewBox padding="var(--s0)">
          <Input
            id="search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            style={{ padding: "var(--s-2)" }}
          />
        </NewBox>
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

export default Gallery;
