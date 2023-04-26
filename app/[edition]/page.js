import { TechRadarChart } from "./Radar/Radar";
import { fetchData } from "./fetchData";

const Edition = async ({ params }) => {
  const data = await fetchData(params.edition);
  return <TechRadarChart data={data} />;
};

export default Edition;
