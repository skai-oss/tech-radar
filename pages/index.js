import Head from "next/head";

import Radar from "../components/radar";
import Logo from "../components/Logo.jsx";
import data from "../placeholder_data/data";

export default function TechRadar() {
  return (
    <div>
      <Head>
        <title>Tech Radar</title>
        <meta name="description" content="Skai Tech Radar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="min-h-full">
          <main className="py-10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex relative justify-center items-center h-16 w-16 rounded-full overflow-clip bg-indigo-700">
                    <Logo />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Skai Tech Radar
                  </h1>
                  <p className="text-sm font-medium text-gray-500">
                    Last updated on{" "}
                    <time
                      dateTime="2020-08-25"
                      className="font-medium text-gray-900"
                    >
                      August 25, 2020
                    </time>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                <section aria-labelledby="tech-radar-section">
                  <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <Radar data={data} />
                    </div>
                  </div>
                </section>
              </div>

              <section
                aria-labelledby="changelog-title"
                className="lg:col-start-3 lg:col-span-1"
              >
                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                  <h2
                    id="changelog-title"
                    className="text-lg font-medium text-gray-900"
                  >
                    Changelog{" "}
                    <span className="font-medium text-gray-400 mb-2 text-xs">
                      (Coming soon)
                    </span>
                  </h2>
                </div>
              </section>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
