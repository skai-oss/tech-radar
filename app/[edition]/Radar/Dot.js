"use client";
import { useRef } from "react";
import Link from "next/link";

export const Dot = ({
  cx,
  cy,
  onMouseEnter,
  onMouseLeave,
  trend,
  edition,
  ...props
}) => {
  const ref = useRef(null);

  const arcStartAngle = trend === "UP" ? (5 / 4) * Math.PI : (3 / 4) * Math.PI;
  const arcEndAngle = trend === "UP" ? (7 / 4) * Math.PI : Math.PI / 4;

  const d = `
    M ${cx + 5 * Math.cos(arcStartAngle)},${cy + 5 * Math.sin(arcStartAngle)}
    A 5,5 0 0,${trend === "UP" ? 1 : 0} ${cx + 5 * Math.cos(arcEndAngle)},${
    cy + 5 * Math.sin(arcEndAngle)
  }
  `;

  return (
    <Link
      href={`/${edition}/tech/${encodeURIComponent(props.name)}`}
      className="svg-anchor"
    >
      <g>
        {trend === "NEW" && (
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
          className="radar-dot"
          ref={ref}
          r="3"
          cx={cx}
          cy={cy}
          onMouseEnter={() => onMouseEnter({ ref, ...props })}
          onMouseLeave={onMouseLeave}
        ></circle>
        {trend !== "NEW" && trend !== null && (
          <path d={d} strokeWidth="1" fill="none" />
        )}
      </g>
    </Link>
  );
};
