import csvToJson from "csvtojson";
import path from "node:path";
import { prepareGraphData } from "./utils/graph_utils";

export const fetchRadar = async () => {
  const filePath = path.join(process.cwd(), "data", "data.csv");
  const csvData = await csvToJson().fromFile(filePath);
  return prepareGraphData(csvData);
};
