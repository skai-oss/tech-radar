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
const quadrants = {
  [PLATFORMS]: [95, 165],
  [LANGUAGES_FRAMEWORKS]: [15, 75],
  [TECHNIQUES]: [195, 255],
  [TOOLS]: [285, 345],
};

const ranges = {
  [ADOPT]: [25, 61],
  [TRIAL]: [95, 111],
  [ASSESS]: [140, 161],
  [HOLD]: [190, 181],
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
    const x = 200 + range * Math.cos((deg * Math.PI) / 180);
    const y = 200 - range * Math.sin((deg * Math.PI) / 180);

    const colliding = Object.values(memo).some(({ cx, cy }) => {
      const distance = Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2));
      return distance < 10;
    });

    if (!colliding) {
      newPosition = { cx: x, cy: y };
      break;
    }
  }

  return newPosition || { cx: 200 + rangeMax, cy: 200 };
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

export const prepareGraphData = (data) => {
  const memo = {};
  return data.map(({ name, quadrant, ring, description }) => {
    const { cx, cy } = calculatePosition(quadrant, ring, name, memo);
    return { name, quadrant, ring, description, cx, cy };
  });
};
