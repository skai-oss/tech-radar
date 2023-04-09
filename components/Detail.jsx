import { useEffect, useRef } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Details = ({ name, ring, quadrant, description }) => {
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
      <h2
        id="applicant-information-title"
        className="text-lg leading-6 font-medium text-gray-900 flex justify-between mb-1"
      >
        <span>{name}</span>
        <Link
          href={{
            pathname: "/",
            query: {},
          }}
        >
            <XMarkIcon className="w-6 h-6 text-gray-500" />
        </Link>
      </h2>
      <p className="text-gray-400 mb-2 font-light font-sm">
        {quadrant} <b>·</b> <i>{ring}</i>
      </p>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1">
        <div className="sm:col-span-1">
          <dd className="mt-1 prose prose-sm max-w-none">
            <ReactMarkdown linkTarget="_blank">{description}</ReactMarkdown>
          </dd>
        </div>
      </dl>
    </section>
  );
};

export default Details;
