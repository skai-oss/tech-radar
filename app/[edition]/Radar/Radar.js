"use client";
import { Dot } from "./Dot";
import {
  PLATFORMS,
  LANGUAGES_FRAMEWORKS,
  TECHNIQUES,
  TOOLS,
  ADOPT,
  TRIAL,
  ASSESS,
  HOLD,
} from "../types";
import { Tooltip } from "./Tooltip";
import { useState } from "react";

export const RINGS_DISPLAY_NAMES = {
  [ADOPT]: "Adopt",
  [TRIAL]: "Trial",
  [ASSESS]: "Assess",
  [HOLD]: "Hold",
};

export const QUADRANTS_DISPLAY_NAMES = {
  [PLATFORMS]: "Platforms",
  [LANGUAGES_FRAMEWORKS]: "Languages & Frameworks",
  [TECHNIQUES]: "Techniques",
  [TOOLS]: "Tools",
};

export const TechRadarChart = ({ data }) => {
  const [tooltip, setTooltip] = useState(null);
  const [closeInProgress, setCloseInProgress] = useState(0);

  const onMouseEnter = ({ ref, ...props }) => {
    closeInProgress !== 0 && clearTimeout(closeInProgress);
    const { top, left } = ref.current.getBoundingClientRect();
    setTimeout(() => setTooltip({ top, left, ...props }), 200);
  };

  const onMouseLeave = () => {
    const token = setTimeout(() => setTooltip(null), 200);
    setCloseInProgress(token);
  };

  const onTooltipAccess = () => {
    if (closeInProgress) {
      clearTimeout(closeInProgress);
      setCloseInProgress(0);
    }
  };
  return (
    <>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        className="graph relative"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="radar-axis-label">
          <text x="0" y="15">
            {QUADRANTS_DISPLAY_NAMES[PLATFORMS]}
          </text>
          <text x="500" y="15" textAnchor="end">
            {QUADRANTS_DISPLAY_NAMES[LANGUAGES_FRAMEWORKS]}
          </text>
          <text x="0" y="500">
            {QUADRANTS_DISPLAY_NAMES[TECHNIQUES]}
          </text>
          <text x="500" y="500" textAnchor="end">
            {QUADRANTS_DISPLAY_NAMES[TOOLS]}
          </text>
        </g>

        <g className="radar-quadrant-label">
          <text x="20" y="245" textAnchor="middle">
            {RINGS_DISPLAY_NAMES[HOLD]}
          </text>

          <text x="70" y="245" textAnchor="middle">
            {RINGS_DISPLAY_NAMES[ASSESS]}
          </text>

          <text x="130" y="245" textAnchor="middle">
            {RINGS_DISPLAY_NAMES[TRIAL]}
          </text>

          <text x="210" y="245" textAnchor="middle">
            {RINGS_DISPLAY_NAMES[ADOPT]}
          </text>

          <text x="480" y="245" textAnchor="middle">
            {RINGS_DISPLAY_NAMES[HOLD]}
          </text>

          <text x="430" y="245" textAnchor="middle">
            {RINGS_DISPLAY_NAMES[ASSESS]}
          </text>
          <text x="370" y="245" textAnchor="middle">
            {RINGS_DISPLAY_NAMES[TRIAL]}
          </text>
          <text x="290" y="245" textAnchor="middle">
            {RINGS_DISPLAY_NAMES[ADOPT]}
          </text>
        </g>
        <g className="radar-axis">
          <line x1="0" x2="500" y1="250" y2="250"></line>
          <line x1="250" x2="250" y1="0" y2="500"></line>
        </g>
        <g className="radar-quadrant-border">
          <circle cx="250" cy="250" r="85" />
          <circle cx="250" cy="250" r="155" />
          <circle cx="250" cy="250" r="210" />
        </g>
        <g className="radar-dots">
          {data.map((item) => (
            <Dot
              key={item.name}
              {...item}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          ))}
        </g>
      </svg>
      {tooltip && (
        <Tooltip
          {...tooltip}
          onTooltipAccess={onTooltipAccess}
          onMouseLeave={onMouseLeave}
        />
      )}
    </>
  );
};
