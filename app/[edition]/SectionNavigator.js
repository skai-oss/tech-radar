"use client";
import Link from "next/link";
import {
  InformationCircleIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { useSelectedLayoutSegment } from "next/navigation";
import { RadarIcon } from "./RadarIcon";

export const SectionNavigator = ({ edition }) => {
  const segment = useSelectedLayoutSegment();
  console.log(segment);

  return (
    <div className="px-4 py-5 sm:px-6">
      <span className="isolate inline-flex rounded-md shadow-sm">
        <Link href={`/${edition}`}>
          <div
            className={`${
              segment === null
                ? "bg-gray-100 dark:bg-gray-700"
                : "bg-white dark:bg-white dark:bg-opacity-20"
            } relative -ml-px inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 dark:ring-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:z-10`}
          >
            <RadarIcon className="h-6" />
          </div>
        </Link>
        <Link href={`/${edition}/list`}>
          <div
            className={`${
              segment === "list"
                ? "bg-gray-100 dark:bg-gray-700"
                : "bg-white dark:bg-white dark:bg-opacity-20"
            } relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 dark:ring-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:z-10`}
          >
            <ListBulletIcon className="h-6" />
          </div>
        </Link>
        <Link href={`/${edition}/legend`}>
          <div
            className={`${
              segment === "legend"
                ? "bg-gray-100 dark:bg-gray-700"
                : "bg-white dark:bg-white dark:bg-opacity-20"
            } relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 dark:ring-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:z-10`}
          >
            <InformationCircleIcon className="h-6" />
          </div>
        </Link>
      </span>
    </div>
  );
};
