"use client";
import ReactDOM from "react-dom";
import { useLayoutEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const Tooltip = ({
  top,
  left,
  name,
  ring,
  quadrant,
  description,
  onTooltipAccess,
  onMouseLeave,
  ...props
}) => {
  const [el, setEl] = useState(null);

  useLayoutEffect(() => {
    const el = document.createElement("span");
    document.body.appendChild(el);
    setEl(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  const deltaX =
    window.innerWidth - (left + 384 + 12) > 0 ? "20px" : `-${384 + 12}px`;
  const deltaY =
    window.innerHeight - (top + 384 + 12) > 0 ? "20px" : `-${384 + 12}px`;
  return el !== null
    ? ReactDOM.createPortal(
        <div
          className="w-96 h-96 bg-white px-4 py-5 shadow border sm:rounded-lg sm:px-6 overflow-y-auto"
          style={{
            position: "fixed",
            top: top,
            left: left,
            transform: `translate(${deltaX}, ${deltaY})`,
          }}
          onMouseEnter={onTooltipAccess}
          onMouseLeave={onMouseLeave}
        >
          <h4 className="font-medium text-gray-400 mb-2 text-xs">
            {quadrant} <b>·</b> <i>{ring}</i>
          </h4>
          <h3 className="font-medium text-gray-900 mb-2">{name}</h3>
          <article className="text-sm text-gray-500  prose prose-base">
            <ReactMarkdown linkTarget="_blank">{description}</ReactMarkdown>
          </article>
        </div>,
        el
      )
    : null;
};
