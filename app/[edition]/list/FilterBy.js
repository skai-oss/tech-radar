"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const trendString = {
  UP: "Trending up",
  DOWN: "Trending down",
  NEW: "New",
};

const sortFor = (filterFor) => (a, b) => {
  const sortBy = filterFor === "byRing" ? "quadrant" : "ring";
  if (a[sortBy] === b[sortBy]) return a.name.localeCompare(b.name);
  return a[sortBy] > b[sortBy] ? 1 : -1;
};

const getItems = (data, filterBy, filter) => {
  return data[filterBy][filter].sort(sortFor(filterBy));
};

export const FilterBy = ({ data, edition }) => {
  const [filterBy, setFilterBy] = useState("byRing");
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="flex justify-end gap-2 items-center mb-4">
        <span className="font-light hidden sm:inline">Filter by</span>
        <div className="rounded-lg bg-white dark:bg-slate-800">
          <span className="isolate inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilterBy("byQuadrant")}
              className={`${
                filterBy === "byQuadrant"
                  ? "bg-gray-100 dark:bg-gray-700"
                  : "bg-white dark:bg-white dark:bg-opacity-20"
              } relative inline-flex items-center rounded-l-md  px-3 py-2 text-sm  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:ring-slate-800 dark:hover:bg-slate-700 focus:z-10`}
            >
              <span className="h-6 flex items-center">Quadrant</span>
            </button>
            <button
              onClick={() => setFilterBy("byRing")}
              className={`${
                filterBy === "byRing"
                  ? "bg-gray-100 dark:bg-gray-700"
                  : "bg-white dark:bg-white dark:bg-opacity-20"
              } relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:z-10`}
            >
              <span className="h-6 flex items-center">Ring</span>
            </button>
          </span>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden divide-y divide-gray-200 dark:divide-white/5">
        {Object.keys(data[filterBy]).map((filter, index) => (
          <div
            className={`collapse ${
              index === open ? "collapse-open" : "collapse-close"
            }`}
            key={filter}
          >
            <input
              type="checkbox"
              onChange={() => (index !== open ? setOpen(index) : setOpen(null))}
            />
            <div className="collapse-title bg-gray-100 dark:bg-gray-900 flex items-center p-4">
              <div className="font-light text-xl">{filter}</div>
              <div className="flex flex-1" />
              <div
                className={`${
                  index === open ? "rotate-180" : "rotate-0"
                } h-8 w-8 border border-gray-400 dark:border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-300`}
              >
                <ChevronDownIcon className="h-4" />
              </div>
            </div>
            <div className="collapse-content">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-white/5"
                key={filter}
              >
                {getItems(data, filterBy, filter).map((item) => (
                  <li
                    key={item.name}
                    className="relative flex items-center space-x-4 py-4"
                  >
                    <div className="min-w-0 flex-auto">
                      <div className="flex items-center gap-x-3">
                        <h2 className="min-w-0 text-sm leading-6">
                          <Link
                            href={`${edition}/tech/${encodeURIComponent(
                              item.name
                            )}`}
                            className="flex gap-x-2"
                          >
                            <span className="truncate">{item.name}</span>
                            <span className="text-gray-400">/</span>
                            <span className="truncate">
                              {filterBy === "byRing"
                                ? item.quadrant
                                : item.ring}
                            </span>
                            <span className="absolute inset-0" />
                          </Link>
                        </h2>
                      </div>
                    </div>
                    {item.trend && (
                      <div
                        className={
                          "rounded-full hidden sm:flex flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset"
                        }
                      >
                        {trendString[item.trend]}
                      </div>
                    )}
                    <ChevronRightIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
