import { useRef } from "react";

const ranges = {
  ADOPT: [10, 65],
  TRIAL: [85, 115],
  ASSESS: [130, 165],
  HOLD: [180, 185],
};

const quadrants = {
  PLATFORMS: [85, 175],
  LANGUAGESFRAMEWORKS: [5, 85],
  TECHNIQUES: [185, 265],
  TOOLS: [275, 355],
};

const convert = (str = "") =>
  str.replaceAll(" ", "").replaceAll("&", "").toUpperCase();

const memo = {};

const Dot = ({
  name,
  ring,
  quadrant,
  description,
  onMouseEnter,
  onMouseLeave,
}) => {
  const ref = useRef(null);

  const calculatePosition = (quadrant, ring, name) => {
    if (memo[name]) return memo[name];
    const [rangeMin, rangeMax] = ranges[convert(ring)] || [];
    const range = Math.random() * (rangeMax - rangeMin) + rangeMin;

    const [degMin, degMax] = quadrants[convert(quadrant)] || [];
    const deg = Math.random() * (degMax - degMin) + degMin;

    const cx = 200 + range * Math.cos((deg * Math.PI) / 180);
    const cy = 200 - range * Math.sin((deg * Math.PI) / 180);
    memo[name] = { cx, cy };
    return memo[name];
  };

  const { cx, cy } = calculatePosition(quadrant, ring, name);

  return (
    <>
      <g className="radar-dot">
        <circle
          r="3"
          cx={cx}
          cy={cy}
          ref={ref}
          onMouseEnter={() =>
            onMouseEnter({ ref, name, ring, quadrant, description })
          }
          onMouseLeave={onMouseLeave}
        ></circle>
      </g>
    </>
  );
};

export default Dot;
