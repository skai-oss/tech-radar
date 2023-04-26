import {
  ChartBarIcon,
  ListBulletIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Header } from "./Header/Header";
import { cookies } from "next/headers";

const Layout = ({ children, params }) => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <>
      <Header defaultTheme={theme?.value} />
      <div className="overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow mt-6">
        <div className="px-4 py-5 sm:px-6">
          <span className="isolate inline-flex rounded-md shadow-sm">
            <Link href={`/${params?.edition}`}>
              <div className="relative inline-flex items-center rounded-l-md bg-white dark:bg-white dark:bg-opacity-20 px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:ring-slate-800 dark:hover:bg-slate-700 focus:z-10">
                <ChartBarIcon className="h-6" />
              </div>
            </Link>
            <Link href={`/${params?.edition}/list`}>
              <div className="relative -ml-px inline-flex items-center bg-white dark:bg-white dark:bg-opacity-20 px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 dark:ring-slate-800 focus:z-10">
                <ListBulletIcon className="h-6" />
              </div>
            </Link>
            <Link href={`/${params?.edition}/legend`}>
              <div className="relative -ml-px inline-flex items-center rounded-r-md bg-white dark:bg-white dark:bg-opacity-20 px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 dark:ring-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:z-10">
                <InformationCircleIcon className="h-6" />
              </div>
            </Link>
          </span>
        </div>
        <div className="px-4 py-5 sm:p-6">{children}</div>
      </div>
    </>
  );
};
export default Layout;
