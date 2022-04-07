import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

const Tooltip = ({
  top,
  left,
  name,
  ring,
  quadrant,
  description,
  onTooltipAccess,
  onMouseLeave,
}) => {
  const [el, setEl] = useState(null);

  useEffect(() => {
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
          <p className="text-sm text-gray-500">{description}</p>
        </div>,
        el
      )
    : null;
};

export default Tooltip;
