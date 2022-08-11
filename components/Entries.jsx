import { QUADRANTS, RINGS, FILTERS } from "../utils/types";
import Details from "./Details";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Entries = ({ data }) => {
  return (
    <>
      <Tab.Group>
        <Tab.List
          className="flex p-1 space-x-1 bg-gray-100 rounded-xl text-lg font-light text-gray-700 flex justify-between"
          as="h2"
        >
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium rounded-lg",
                selected
                  ? "text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                  : "text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
              )
            }
          >
            Rings
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium rounded-lg",
                selected
                  ? "text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                  : "text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
              )
            }
          >
            Quadrants
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="flow-root">
              <div className="w-full mx-auto bg-white rounded-2xl flex flex-col gap-4 mt-4">
                {FILTERS[RINGS].map((filter, index) => (
                  <Details
                    key={filter}
                    type={RINGS}
                    data={data}
                    filter={filter}
                    defaultOpen={index === 0}
                  />
                ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flow-root">
              <div className="w-full mx-auto bg-white rounded-2xl flex flex-col gap-4 mt-4">
                {FILTERS[QUADRANTS].map((filter, index) => (
                  <Details
                    key={filter}
                    type={QUADRANTS}
                    data={data}
                    filter={filter}
                    defaultOpen={index === 0}
                  />
                ))}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Entries;
