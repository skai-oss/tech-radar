import csvToJson from "csvtojson";
import path from "node:path";
import { prepareGraphData } from "./utils/graph_utils";

const latest = "2023H2";

export const fetchRadar = async (slug = latest) => {
  const param = typeof slug === "object" ? slug[0] : slug;
  const edition = param === "index" ? latest : param;
  const fileName = `${edition}.csv`;
  const filePath = path.join(process.cwd(), "public", fileName);
  const csvData = await csvToJson().fromFile(filePath);
  return prepareGraphData(csvData);
};
