import { useRef } from "react";

const ranges = {
  ADOPT: [10, 65],
  TRIAL: [85, 115],
  ASSESS: [130, 165],
  HOLD: [180, 185],
};

const quadrants = {
  PLATFORMS: [95, 165],
  LANGUAGESFRAMEWORKS: [15, 75],
  TECHNIQUES: [195, 255],
  TOOLS: [285, 345],
};

const convert = (str = "") =>
  str.replaceAll(" ", "").replaceAll("&", "").toUpperCase();

const memo = {};

const attempt = ({ rangeMax, rangeMin, degMax, degMin }, attempts = 0) => {
  const range = Math.random() * (rangeMax - rangeMin) + rangeMin;
  const deg = Math.random() * (degMax - degMin) + degMin;
  const x = 200 + range * Math.cos((deg * Math.PI) / 180);
  const y = 200 - range * Math.sin((deg * Math.PI) / 180);

  const collision = Object.values(memo).find(({ cx, cy }) => {
    const distance = Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2));
    return distance < 14;
  });

  return collision && attempts < 10
    ? attempt({ rangeMax, rangeMin, degMax, degMin }, attempts++)
    : { cx: x, cy: y };
};

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
    const [degMin, degMax] = quadrants[convert(quadrant)] || [];
    memo[name] = attempt({ rangeMax, rangeMin, degMax, degMin });
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
