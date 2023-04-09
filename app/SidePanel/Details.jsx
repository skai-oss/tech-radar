"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

import { ChevronUpIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  convert,
  QUADRANTS_DISPLAY_NAMES,
  RINGS,
  RINGS_DISPLAY_NAMES,
  getSubHeaders,
} from "../integration/utils/types";

export const Details = ({ data, filter, defaultOpen, type }) => {
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
              {getSubHeaders(type).map((subHeader) => {
                const items = data.filter(
                  (item) =>
                    convert(type === RINGS ? item.ring : item.quadrant) ===
                      filter &&
                    convert(type === RINGS ? item.quadrant : item.ring) ===
                      subHeader
                );
                return items.length > 0 ? (
                  <div
                    key={`${type}-${subHeader}-${filter}`}
                    className="flex flex-col gap-2"
                  >
                    <h3 className="mx-4 my-2">
                      {type === RINGS
                        ? QUADRANTS_DISPLAY_NAMES[subHeader]
                        : RINGS_DISPLAY_NAMES[subHeader]}
                    </h3>
                    {items.map((item) => (
                      <li
                        key={`${type}-${subHeader}-${filter}-${item.name}`}
                        id={`${type}-${subHeader}-${filter}-${item.name}`}
                        className=""
                      >
                        <Link
                          href={{
                            pathname: "/",
                            query: {
                              name: item.name.toUpperCase(),
                              ring: item.ring.toUpperCase(),
                            },
                          }}
                        >
                          <div className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                            <h4>{item.name}</h4>
                            <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </div>
                ) : null;
              })}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
