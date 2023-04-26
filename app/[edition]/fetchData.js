import { cache } from "react";
import csvToJson from "csvtojson";
import path from "node:path";
import {
  PLATFORMS,
  LANGUAGES_FRAMEWORKS,
  TECHNIQUES,
  TOOLS,
  ADOPT,
  TRIAL,
  ASSESS,
  HOLD,
} from "./types";

const quadrants = {
  [PLATFORMS]: [95, 165],
  [LANGUAGES_FRAMEWORKS]: [15, 75],
  [TECHNIQUES]: [195, 255],
  [TOOLS]: [285, 345],
};

const ranges = {
  [ADOPT]: [20, 75],
  [TRIAL]: [95, 130],
  [ASSESS]: [180, 200],
  [HOLD]: [230, 240],
};

const weight = { [ADOPT]: 4, [TRIAL]: 3, [ASSESS]: 2, [HOLD]: 1 };

const getTrend = (item) => {
  if (item.prev_ring?.toUpperCase() === "NEW" || !item.prev_ring) return "NEW";
  if (item.ring === item.prev_ring) return null;
  if (
    weight[item.ring?.toUpperCase()] > weight[item.prev_ring?.toUpperCase()]
  ) {
    return "UP";
  } else {
    return "DOWN";
  }
};

export const convert = (str = "") =>
  str.replaceAll(" ", "").replaceAll("&", "").toUpperCase();

export const isEqualOrEmpty = (str, to) => {
  if (str === undefined || str === null || str === "") return true;
  return str.toUpperCase() === to;
};

const getNonCollidingPosition = ({
  rangeMax,
  rangeMin,
  degMax,
  degMin,
  memo,
}) => {
  const maxAttempts = 50;
  let newPosition = null;

  for (let i = 0; i < maxAttempts; i++) {
    const range = Math.random() * (rangeMax - rangeMin) + rangeMin;
    const deg = Math.random() * (degMax - degMin) + degMin;
    const x = 250 + range * Math.cos((deg * Math.PI) / 180);
    const y = 250 - range * Math.sin((deg * Math.PI) / 180);

    const colliding = Object.values(memo).some(({ cx, cy }) => {
      const distance = Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2));
      return distance < 12;
    });

    if (!colliding) {
      newPosition = { cx: x, cy: y };
      break;
    }
  }

  return newPosition || { cx: 250 + rangeMax, cy: 250 };
};

const calculatePosition = (quadrant, ring, name, memo) => {
  if (memo[name]) return memo[name];
  const [rangeMin, rangeMax] = ranges[convert(ring)] || [];
  const [degMin, degMax] = quadrants[convert(quadrant)] || [];
  memo[name] = getNonCollidingPosition({
    rangeMax,
    rangeMin,
    degMax,
    degMin,
    memo,
  });
  return memo[name];
};

export const prepareGraphData = cache((data) => {
  const memo = {};
  return data.map(({ name, quadrant, ring, ...rest }) => {
    const { cx, cy } = calculatePosition(quadrant, ring, name, memo);
    return {
      name,
      quadrant,
      ring,
      cx,
      cy,
      trend: getTrend({ ring, ...rest }),
      ...rest,
    };
  });
});

export const fetchGraph = async (edition) => {
  const fileName = `${edition}.csv`;
  const filePath = path.join(process.cwd(), "public", fileName);
  const csvData = await csvToJson().fromFile(filePath);
  return prepareGraphData(csvData);
};

export const fetchList = async (edition) => {
  const fileName = `${edition}.csv`;
  const filePath = path.join(process.cwd(), "public", fileName);
  const csvData = await csvToJson().fromFile(filePath);
  return {
    byRing: csvData.reduce((arr, item) => {
      arr[item.ring] = arr[item.ring]
        ? [...arr[item.ring], { ...item, trend: getTrend(item) }]
        : [{ ...item, trend: getTrend(item) }];
      return arr;
    }, {}),
    byQuadrant: csvData.reduce((arr, item) => {
      arr[item.quadrant] = arr[item.quadrant]
        ? [...arr[item.quadrant], { ...item, trend: getTrend(item) }]
        : [{ ...item, trend: getTrend(item) }];
      return arr;
    }, {}),
  };
};
