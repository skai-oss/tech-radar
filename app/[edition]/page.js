import { TechRadarChart } from "./Radar/Radar";
import { fetchGraph } from "./fetchData";

const Edition = async ({ params }) => {
  const data = await fetchGraph(params.edition);
  return <TechRadarChart data={data} />;
};

export default Edition;
