import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
// Data
import Data from "../lib/planday";
// Components
import { Stack, NewBox, Grid } from "../ui/EveryLayout";
import Mollen from "../components/Tiles";

const Home: NextPage = () => {
  const [data, setData] = useState(Data);
  return (
    <>
      <Head>
        <title>Planday</title>
        <meta name="description" content="Created by Morten Lynghede" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <NewBox padding="var(--s0)">
          <h1>Image gallery</h1>
          <h2>
            Add or remove pictures to your personal gallery by hovering, or drag
            to rearrange the order.
          </h2>
        </NewBox>
        <Mollen />
      </Stack>
    </>
  );
};

export default Home;
