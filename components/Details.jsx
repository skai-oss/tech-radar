import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronRightIcon } from "@heroicons/react/outline";
import {
  convert,
  QUADRANTS_DISPLAY_NAMES,
  RINGS,
  RINGS_DISPLAY_NAMES,
} from "../utils/types";

const RingDetails = ({ data, filter, defaultOpen, onClick, type }) => {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <span>
              {type === RINGS
                ? RINGS_DISPLAY_NAMES[filter]
                : QUADRANTS_DISPLAY_NAMES[filter]}
            </span>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-blue-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className=" text-sm text-gray-500 -mt-1">
            <ul role="list" className="flex flex-col gap-2">
              {data
                .filter(
                  (item) =>
                    convert(type === RINGS ? item.ring : item.quadrant) ===
                    filter
                )
                .map((item) => (
                  <li key={item.name} className="">
                    <button
                      onClick={() => onClick(item.name)}
                      className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
                    >
                      <span className="flex gap-1 flex-col">
                        <h4>{item.name}</h4>
                        <span className="text-gray-500 font-light italic">
                          {type === RINGS ? item.quadrant : item.ring}
                        </span>
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                    </button>
                  </li>
                ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default RingDetails;
