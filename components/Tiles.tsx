import "../node_modules/react-tiles-dnd/esm/index.css";
import type { RenderTileFunction } from "../lib/react-tiles-dnd/types/index";
import { TilesContainer } from "../lib/react-tiles-dnd/index";
import { useState } from "react";
import confetti from "canvas-confetti";

// Data
import Data from "../lib/planday";
// Components
import Card from "./Card";
import { Stack, NewBox, Switcher, Center } from "../ui/EveryLayout";
import Input from "./Input";
import Button from "./Button";
import { Paragraph } from "./Paragraph";

let int = 0;
function generateId(i: number) {
  return (int = i + 1);
}

/** Maps over the data, to create a tile for each item in the data
 * Returns an array.
 */
const tilesRaw = Data.map((item) => ({
  text: item.title,
  id: generateId(int),
  cols: 1,
  rows: 1,
  ...item,
}));

/** Single tile component */
const render: RenderTileFunction<typeof tilesRaw[0]> = ({
  data,
  isDragging,
}) => {
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

const tileSize = (tile: typeof tilesRaw[0]) => ({
  colSpan: tile.cols,
  rowSpan: tile.rows,
});

function Gallery() {
  /** Set the query string for the search input field
   * Type: String
   */
  const [query, setQuery] = useState("");

  /** Add a new tile */
  const [tiles, setTiles] = useState(tilesRaw);
  const [newTileTitle, setNewTileTitle] = useState("");
  const [newTileDescription, setNewTileDescription] = useState("");
  const [newTileSrc, setNewTileSrc] = useState("");
  /** Function to add the new tile to the tiles state array */
  function handleSubmit(event: any) {
    event.preventDefault();

    const newTile = {
      text: newTileTitle,
      title: newTileTitle,
      id: generateId(int),
      cols: 1,
      rows: 1,
      description: newTileDescription,
      imagePath: newTileSrc,
    };

    setTiles([newTile, ...tiles]);
    confetti();
  }

  /** Filters the tiles based on the query, by matching query with title or description
   * Return a list of objects
   */
  const filteredTiles =
    query.length === 0
      ? tiles
      : tiles.filter((tile) => {
          if (tile.title.toLowerCase().includes(query.toLowerCase()))
            return true;
          if (tile.description.toLowerCase().includes(query.toLowerCase()))
            return true;
        });

  return (
    <Stack>
      <form>
        <NewBox padding="var(--s0)">
          <Input
            id="search"
            type="text"
            aria-label="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            style={{ padding: "var(--s-2)" }}
          />
        </NewBox>
      </form>
      <form onSubmit={handleSubmit}>
        <NewBox padding="var(--s0)">
          <Stack>
            <h3>ADD A NEW TILE</h3>
            <Switcher>
              <Input
                id="title"
                type="text"
                aria-label="Title"
                placeholder="Title"
                value={newTileTitle}
                onChange={(event) => setNewTileTitle(event.target.value)}
                style={{ padding: "var(--s-2)" }}
              />
              <Input
                id="description"
                type="text"
                aria-label="Description"
                placeholder="Description"
                value={newTileDescription}
                onChange={(event) => setNewTileDescription(event.target.value)}
                style={{ padding: "var(--s-2)" }}
              />
              <Input
                id="img-src"
                type="text"
                aria-label="Source of image"
                placeholder="src of image"
                value={newTileSrc}
                onChange={(event) => setNewTileSrc(event.target.value)}
                style={{ padding: "var(--s-2)" }}
              />
            </Switcher>
            <Button aria-label="Add new tile" type="submit">
              Add tile
            </Button>
            <Paragraph>
              DISCLAIMER! New tiles does not persist on refresh, thus you cannot
              add them to your watchlist, or go to their individual page
            </Paragraph>
          </Stack>
        </NewBox>
      </form>
      {filteredTiles.length === 0 ? (
        <Center>
          <h3>NO RESULTS FOUND!</h3>
        </Center>
      ) : (
        <TilesContainer
          data={filteredTiles}
          renderTile={render}
          tileSize={tileSize}
          forceTileWidth={300}
          forceTileHeight={300}
        ></TilesContainer>
      )}
    </Stack>
  );
}

export default Gallery;
