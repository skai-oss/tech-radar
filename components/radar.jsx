import { useState } from "react";
import dynamic from "next/dynamic";

const Tooltip = dynamic(() => import("./Tooltip"), { ssr: false });
const Dot = dynamic(() => import("./Dot"), { ssr: false });

const Radar = ({ data }) => {
  const [tooltip, setTooltip] = useState(null);
  const [closeInProgress, setCloseInProgress] = useState(false);

  const onMouseEnter = ({ ref, name, ring, quadrant, description }) => {
    closeInProgress && clearTimeout(closeInProgress);
    const { top, left } = ref.current.getBoundingClientRect();
    setTooltip({ top, left, name, ring, quadrant, description });
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
            Platforms
          </text>
          <text x="400" y="15" textAnchor="end">
            Languages & frameworks
          </text>
          <text x="0" y="396">
            Techniques
          </text>
          <text x="400" y="396" textAnchor="end">
            Tools
          </text>
        </g>

        <g className="radar-quadrant-label">
          <text x="4" y="198">
            Hold
          </text>

          <text x="39" y="198">
            Assess
          </text>

          <text x="92" y="198">
            Trial
          </text>

          <text x="154" y="198">
            Adopt
          </text>

          <text x="399" y="198" textAnchor="end">
            Hold
          </text>

          <text x="362" y="198" textAnchor="end">
            Assess
          </text>
          <text x="309" y="198" textAnchor="end">
            Trial
          </text>
          <text x="247" y="198" textAnchor="end">
            Adopt
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
              cx="30"
              cy="180"
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

export default Radar;
