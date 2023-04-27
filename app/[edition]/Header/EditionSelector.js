"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useParams } from "next/navigation";

const formatEdition = (edition) => {
  return edition?.replace("H", " H");
};

export const EditionSelector = ({ inline }) => {
  const { edition } = useParams();

  return (
    <Menu
      as="div"
      className={`relative text-left z-10 ${
        inline ? "hidden md:block" : "block md:hidden w-full mt-6"
      }`}
    >
      <div
        className={`${
          inline ? "text-[10px]" : "text-lg mb-2"
        } text-slate-950 dark:text-slate-50 font-bold`}
      >
        EDITION
      </div>
      <div>
        <Menu.Button className="flex gap-2 items-center h-10 w-full justify-between rounded-md bg-black dark:bg-white dark:bg-opacity-20 bg-opacity-10 px-4 py-2 font-medium text-white hover:bg-opacity-20 dark:hover:bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-100 flex-shrink-0 ">
            {formatEdition(edition)}
          </div>
          <ChevronDownIcon
            className="-mr-2 h-5 w-5 text-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-200"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute left-0 mt-2 ${
            inline ? "w-56" : "w-full"
          } origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/2023H1"
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  2023 H1
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/2022H1"
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  2022 H1
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
