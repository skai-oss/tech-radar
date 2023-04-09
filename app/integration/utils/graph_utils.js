import {
  PLATFORMS,
  LANGUAGES_FRAMEWORKS,
  TECHNIQUES,
  TOOLS,
  ADOPT,
  TRIAL,
  ASSESS,
  HOLD,
  convert,
} from "./types";

const ranges = {
  [ADOPT]: [10, 65],
  [TRIAL]: [85, 115],
  [ASSESS]: [130, 165],
  [HOLD]: [180, 185],
};

const quadrants = {
  [PLATFORMS]: [95, 165],
  [LANGUAGES_FRAMEWORKS]: [15, 75],
  [TECHNIQUES]: [195, 255],
  [TOOLS]: [285, 345],
};

const memo = {};

const attemptToPosition = (
  { rangeMax, rangeMin, degMax, degMin },
  attempts = 0
) => {
  const range = Math.random() * (rangeMax - rangeMin) + rangeMin;
  const deg = Math.random() * (degMax - degMin) + degMin;
  const x = 200 + range * Math.cos((deg * Math.PI) / 180);
  const y = 200 - range * Math.sin((deg * Math.PI) / 180);

  const collision = Object.values(memo).find(({ cx, cy }) => {
    const distance = Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2));
    return distance < 14;
  });

  return collision && attempts < 10
    ? attemptToPosition({ rangeMax, rangeMin, degMax, degMin }, attempts++)
    : { cx: x, cy: y };
};

const calculatePosition = (quadrant, ring, name) => {
  if (memo[name]) return memo[name];
  const [rangeMin, rangeMax] = ranges[convert(ring)] || [];
  const [degMin, degMax] = quadrants[convert(quadrant)] || [];
  memo[name] = attemptToPosition({ rangeMax, rangeMin, degMax, degMin });
  return memo[name];
};

export const prepareGraphData = (data) => {
  return data.map(({ name, quadrant, ring, description }) => {
    const { cx, cy } = calculatePosition(quadrant, ring, name);
    return { name, quadrant, ring, description, cx, cy };
  });
};
