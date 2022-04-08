import Head from "next/head";
import fs from "fs";
import path from "path";
import { useState } from "react";
import csvToJson from "csvtojson";

import Radar from "../components/radar/Radar";
import MainSection from "../components/layout/MainSection";
import SideSection from "../components/layout/SideSection";
import Header from "../components/Header";
import Entries from "../components/Entries";
import Details from "../components/Detail";
import { prepareGraphData } from "../utils/graph_utils";

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "data.csv");
  const stats = fs.statSync(filePath);
  const csvData = await csvToJson().fromFile(filePath);
  const data = prepareGraphData(csvData);
  return {
    props: {
      data,
      updated: stats.mtimeMs,
    },
  };
};

export default function TechRadar({ data, updated }) {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <Head>
        <title>Skai Tech Radar</title>
        <meta name="description" content="Skai Tech Radar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="min-h-full min-w-screen w-screen overflow-x-clip">
          <main className="py-10 w-full">
            <Header updated={updated} />

            <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <SideSection>
                <Entries data={data} onClick={setSelected} />
              </SideSection>
              <MainSection>
                {selected === null ? (
                  <Radar data={data} />
                ) : (
                  <Details
                    {...data.find((item) => item.name === selected)}
                    close={() => setSelected(null)}
                  />
                )}
              </MainSection>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
