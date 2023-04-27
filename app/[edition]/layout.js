import { Header } from "./Header/Header";
import { cookies } from "next/headers";
import { SectionNavigator } from "./SectionNavigator";

const Layout = ({ children, params }) => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <>
      <Header defaultTheme={theme?.value} />
      <div className="overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow mt-6">
        <SectionNavigator edition={params?.edition} />
        <div className="px-4 py-5 sm:p-6">{children}</div>
      </div>
    </>
  );
};
export default Layout;
