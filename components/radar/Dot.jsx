import { useRef } from "react";

const Dot = ({
  name,
  ring,
  quadrant,
  cx,
  cy,
  description,
  onMouseEnter,
  onMouseLeave,
}) => {
  const ref = useRef(null);

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
