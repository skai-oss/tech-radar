"use client";
import { useRef } from "react";
import { ADOPT, ASSESS, HOLD, TRIAL } from "../types";

const weight = { [ADOPT]: 4, [TRIAL]: 3, [ASSESS]: 2, [HOLD]: 1 };

export const Dot = ({ cx, cy, onMouseEnter, onMouseLeave, ...props }) => {
  const { ring, prev_ring } = props;
  const trending =
    weight[ring?.toUpperCase()] > weight[prev_ring?.toUpperCase()];
  const isNew = prev_ring?.toUpperCase() === "NEW" || !prev_ring;
  const ref = useRef(null);

  const arcStartAngle = trending ? (5 / 4) * Math.PI : (3 / 4) * Math.PI;
  const arcEndAngle = trending ? (7 / 4) * Math.PI : Math.PI / 4;

  const d = `
    M ${cx + 5 * Math.cos(arcStartAngle)},${cy + 5 * Math.sin(arcStartAngle)}
    A 5,5 0 0,${trending ? 1 : 0} ${cx + 5 * Math.cos(arcEndAngle)},${
    cy + 5 * Math.sin(arcEndAngle)
  }
  `;

  return (
    <>
      <g className="radar-dot">
        {isNew && (
          <circle
            r="5"
            cx={cx}
            cy={cy}
            fill="transparent"
            strokeDasharray="0"
            strokeWidth="1"
          />
        )}
        <circle
          ref={ref}
          r="3"
          cx={cx}
          cy={cy}
          onMouseEnter={() => onMouseEnter({ ref, ...props })}
          onMouseLeave={onMouseLeave}
        ></circle>
        {ring !== prev_ring && !isNew && (
          <path d={d} strokeWidth="1" fill="none" />
        )}
      </g>
    </>
  );
};
