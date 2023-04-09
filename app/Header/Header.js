import { Logo } from "./Logo";

export const Header = ({ updated }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
      <div className="flex items-center space-x-5">
        <div className="flex-shrink-0">
          <div className="flex relative justify-center items-center h-16 w-16 rounded-full overflow-clip bg-blue-500">
            <Logo />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tech Radar</h1>
          <p className="text-sm font-medium text-gray-500">
            Last updated on{" "}
            <time
              dateTime={updated}
              className="font-medium text-gray-900"
            ></time>
          </p>
        </div>
      </div>
    </div>
  );
};
