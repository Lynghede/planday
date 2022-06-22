import type { NextPage } from "next";
import Head from "next/head";
// Components
import { Stack, NewBox } from "../ui/EveryLayout";
import Gallery from "../components/Tiles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Planday</title>
        <meta name="description" content="Created by Morten Lynghede" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <NewBox padding="var(--s0)">
          <h1>IMAGE GALLERY</h1>
          <h2>
            Add or remove pictures to your personal gallery by hovering. Add new
            tiles by filling the form, and drag existing tiles to rearrange the
            order.
          </h2>
        </NewBox>
        <Gallery />
      </Stack>
    </>
  );
};

export default Home;
