import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Stack, NewBox, ELEVATIONS } from "../ui/EveryLayout";
import { useWatchlist } from "../utlities/WatchlistContext";
import { RemoveCircle, AddCircle } from "@styled-icons/ionicons-outline/";

interface Props {
  data: any;
}
/** The Card component recieves data on a single object */
const Card: React.FC<Props> = (props) => {
  const watchlist = useWatchlist();
  const { data } = props;
  const description = data.description || "no description";
  const thumb = data.imagePath || "/images/molle.jpeg";

  /** Adds item to your watchlist */
  function handleClickAdd(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    watchlist.addToList(data);
  }
  /** Removes item from your watchlist */
  function handleClickRemove(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    watchlist.removeFromList(data);
  }

  /** Check if object are currently in your watchlist,
   * to highlight the plus buttton on the tile overlay */
  function isActive() {
    return watchlist.watchlist.some((element) => element.id === data.id);
  }

  return (
    <Container className="container" padding="0">
      {/* <Link href={`/film/${id}`} passHref> */}
      <Image src={thumb} alt={description} layout="fill" objectFit="cover" />
      <Overlay>
        <OverlayInfo>
          <span style={{ height: "100%" }}>
            <OverlayDescription>{description}</OverlayDescription>
          </span>
          <OverlayAction>
            <OverlayActionItem onClick={handleClickAdd} active={isActive()}>
              <AddCircle size={30} />
            </OverlayActionItem>
            <OverlayActionItem onClick={handleClickRemove}>
              <RemoveCircle size={30} />
            </OverlayActionItem>
          </OverlayAction>
        </OverlayInfo>
      </Overlay>
      {/* </Link> */}
    </Container>
  );
};

export default Card;

const Overlay = styled.div`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s linear;
`;

const OverlayInfo = styled.div`
  background: rgba(16, 20, 38, 0.8);
  z-index: 2;

  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: background-color 0.2s;
`;

const OverlayDescription = styled.div`
  bottom: 0;
  color: var(--color-light-green);
  font-size: 1.5rem;
  padding: 0 1rem;
  position: absolute;
  margin: 1rem 0;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
`;

const OverlayAction = styled.div`
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.75), transparent);
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.75rem 0;
  border-radius: 5px 5px 0 0;
`;

const OverlayActionItem = styled.div<{ active?: boolean }>`
  color: ${(p) => (p.active ? "var(--color-green)" : "white")};

  transition: transform 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;

export const H4 = styled.h4`
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-wrap: break-all;
  overflow: hidden;
  margin: 0;
  color: var(--color-light-green);
`;

export const Paragraph = styled.p`
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  margin: 0;
  font-size: 0.85rem;
`;

const Container = styled(NewBox)`
  height: 100%;
  width: 100%;
  /* border-radius: 6px; */
  /* background: var(--color-green); */
  overflow: hidden;
  position: relative;
  box-shadow: ${ELEVATIONS.medium};
  --shadow-color: 295deg 0% 0%;

  &:hover ${Overlay} {
    opacity: 1;
    pointer-events: all;
  }
`;
