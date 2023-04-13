import { SidePanel } from "../SidePanel/SidePanel";
import { MainPanel } from "../MainPanel/MainPanel";
import { PanelDetails } from "../MainPanel/PanelDetails/PanelDetails";
import { Legend } from "../Legend/Legend";
import { fetchRadar } from "../integration/radarFetcher";
import { Entries } from "../SidePanel/Entries";
import { Radar } from "../MainPanel/Radar/Radar";
import { LegendDetails } from "../Legend/LegendDetails";

export const revalidate = 3600;

const Page = async ({ params: { slug } }) => {
  const radar = await fetchRadar(slug);
  return (
    <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
      <SidePanel>
        <Entries data={radar} />
      </SidePanel>
      <div className="space-y-6 lg:col-start-2 lg:col-span-2">
        <MainPanel>
          <Radar data={radar} />
          <PanelDetails data={radar} />
        </MainPanel>
        <Legend>
          <LegendDetails />
        </Legend>
      </div>
    </div>
  );
};

export default Page;
