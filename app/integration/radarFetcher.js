import csvToJson from "csvtojson";
import path from "node:path";
import { prepareGraphData } from "./utils/graph_utils";

export const fetchRadar = async (slug = "latest") => {
  const fileName = `${slug}.csv`;
  const filePath = path.join(process.cwd(), "data", fileName);
  const csvData = await csvToJson().fromFile(filePath);
  return prepareGraphData(csvData);
};
