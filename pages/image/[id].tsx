import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
/** COMPONENTS */
import { Stack, NewBox } from "../../ui/EveryLayout";
import capitalizeFirstLetter from "../../lib/CapitalizeFirstLetter";
import Data from "../../lib/planday";

/** The componenet is responsible for fetching a movie/series data based on its ID.
 * The ID is taken from the URL query
 */
const Image: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const tempId = parseInt(id as any) - 1;
  const data = Data[tempId];

  const src = data.imagePath || "/images/molle.jpeg";
  const title = data.title;
  const description = data.description || "no description";

  return (
    <>
      <Head>
        <title>
          {capitalizeFirstLetter(title)} - {title}
        </title>
      </Head>
      <Stack>
        <Stack style={{ position: "relative" }}>
          <Backdrop url={src}>
            <BackdropGradient />
          </Backdrop>
          <Description>
            <h1>{title}</h1>
            <h2 style={{ color: "var(--color-green)" }}>{description}</h2>
          </Description>
        </Stack>
      </Stack>
    </>
  );
};

export default Image;

interface Backdrop {
  url: string;
}
const Backdrop = styled.div<Backdrop>`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(p) => (p.url ? `url(${p.url})` : "/images/morten.jpeg")};
  height: 700px;
  background-position: 50% 50% !important;
  overflow: hidden;
`;

const BackdropGradient = styled.div`
  background-image: linear-gradient(0deg, var(--color-purple) 5%, transparent);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Description = styled(NewBox)`
  left: 0;
  bottom: 0;
  margin-top: 0;
  position: absolute;
  width: 100%;
`;
