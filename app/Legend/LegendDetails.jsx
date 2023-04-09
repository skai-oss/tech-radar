"use client";

import {
  ADOPT,
  TRIAL,
  ASSESS,
  HOLD,
  isEqualOrEmpty,
} from "../integration/utils/types";
import { useSearchParams } from "next/navigation";

export const LegendDetails = () => {
  const searchParams = useSearchParams();
  const ring = searchParams.get("ring");
  return (
    <ul className="prose prose-sm max-w-none">
      <li className="text-lg leading-6 font-medium text-gray-900 flex justify-between mb-1">
        Ring definition
      </li>
      <li className={!isEqualOrEmpty(ring, ADOPT) ? "hidden" : ""}>
        <h4>Adopt</h4>
        <p>
          The following items are the Skai standard and are widely used in our
          production systems, accompanied by clear guidelines, best practices
          and optionally training and enablement.
          <br />
          Teams should adhere to these standards.
        </p>
      </li>
      <li className={!isEqualOrEmpty(ring, TRIAL) ? "hidden" : ""}>
        <h4>Trial</h4>
        <p>
          The following items are part of our tech roadmap. We are already
          experimenting with them and might have limited usage in our production
          systems.
          <br />
          According to risk assessment, teams are encouraged to participate in
          these trials.
        </p>
      </li>
      <li className={!isEqualOrEmpty(ring, ASSESS) ? "hidden" : ""}>
        <h4>Assess</h4>
        <p>
          The following items have a high potential for our tech roadmap.
          However, we haven’t tried them so far.
          <br />
          Teams are welcome to explore these items.
        </p>
      </li>
      <li className={!isEqualOrEmpty(ring, HOLD) ? "hidden" : ""}>
        <h4>Hold</h4>
        <p>
          The following items shouldn’t be used in new projects in Skai. If it
          already exists, keep it in minimal maintenance mode or deprecate it.
        </p>
      </li>
    </ul>
  );
};
