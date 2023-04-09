"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Dot } from "./Dot";
import {
  ADOPT,
  ASSESS,
  HOLD,
  LANGUAGES_FRAMEWORKS,
  PLATFORMS,
  QUADRANTS_DISPLAY_NAMES,
  RINGS_DISPLAY_NAMES,
  TECHNIQUES,
  TOOLS,
  TRIAL,
} from "../../integration/utils/types";
import { useSearchParams } from "next/navigation";

const Tooltip = dynamic(() => import("./Tooltip"), { ssr: false });

export const Radar = ({ data }) => {
  const [tooltip, setTooltip] = useState(null);
  const [closeInProgress, setCloseInProgress] = useState(false);

  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  if (name) return null;

  const onMouseEnter = ({ ref, name, ring, quadrant, description }) => {
    closeInProgress && clearTimeout(closeInProgress);
    const { top, left } = ref.current.getBoundingClientRect();
    setTimeout(
      () => setTooltip({ top, left, name, ring, quadrant, description }),
      200
    );
  };

  const onMouseLeave = () => {
    const token = setTimeout(() => setTooltip(null), 200);
    setCloseInProgress(token);
  };

  const onTooltipAccess = () => {
    if (closeInProgress) {
      clearTimeout(closeInProgress);
      setCloseInProgress(false);
    }
  };
  return (
    <>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        className="graph relative"
        height="100%"
        width="100%"
        viewBox="0 0 401 401"
      >
        <g className="radar-axis-label">
          <text x="0" y="15">
            {QUADRANTS_DISPLAY_NAMES[PLATFORMS]}
          </text>
          <text x="400" y="15" textAnchor="end">
            {QUADRANTS_DISPLAY_NAMES[LANGUAGES_FRAMEWORKS]}
          </text>
          <text x="0" y="396">
            {QUADRANTS_DISPLAY_NAMES[TECHNIQUES]}
          </text>
          <text x="400" y="396" textAnchor="end">
            {QUADRANTS_DISPLAY_NAMES[TOOLS]}
          </text>
        </g>

        <g className="radar-quadrant-label">
          <text x="4" y="198">
            {RINGS_DISPLAY_NAMES[HOLD]}
          </text>

          <text x="39" y="198">
            {RINGS_DISPLAY_NAMES[ASSESS]}
          </text>

          <text x="92" y="198">
            {RINGS_DISPLAY_NAMES[TRIAL]}
          </text>

          <text x="154" y="198">
            {RINGS_DISPLAY_NAMES[ADOPT]}
          </text>

          <text x="399" y="198" textAnchor="end">
            {RINGS_DISPLAY_NAMES[HOLD]}
          </text>

          <text x="362" y="198" textAnchor="end">
            {RINGS_DISPLAY_NAMES[ASSESS]}
          </text>
          <text x="309" y="198" textAnchor="end">
            {RINGS_DISPLAY_NAMES[TRIAL]}
          </text>
          <text x="247" y="198" textAnchor="end">
            {RINGS_DISPLAY_NAMES[ADOPT]}
          </text>
        </g>

        <g className="radar-axis">
          <line x1="0" x2="401" y1="201" y2="201"></line>
          <line x1="201" x2="201" y1="0" y2="401"></line>
        </g>

        <g className="radar-quadrant-border">
          <circle cx="201" cy="201" r="75" id="innerText" />
          <circle cx="201" cy="201" r="125" />
          <circle cx="201" cy="201" r="175" />
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
