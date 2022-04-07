import { useEffect, useRef } from "react";
import { XIcon } from "@heroicons/react/outline";

const Details = ({ name, ring, quadrant, description, close }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  });
  return (
    <section aria-labelledby="applicant-information-title" ref={containerRef}>
      <div className="px-4 py-5 sm:px-6">
        <h2
          id="applicant-information-title"
          className="text-lg leading-6 font-medium text-gray-900 flex justify-between mb-1"
        >
          <span>{name}</span>
          <button onClick={close}>
            <XIcon className="w-6 h-6 text-gray-500" />
          </button>
        </h2>
        <p className="text-gray-400 mb-2 font-light font-sm">
          {quadrant} <b>·</b> <i>{ring}</i>
        </p>
      </div>
      <div className="px-4 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900">{description}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Details;
