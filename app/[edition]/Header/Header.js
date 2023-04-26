import { Logo } from "./Logo";
import { ThemePicker } from "./ThemePicker";
import { EditionSelector } from "./EditionSelector";

export const Header = ({ defaultTheme }) => {
  return (
    <>
      <div className="flex items-center gap-6 py-4">
        <Logo />
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white md:text-6xl">
          Tech Radar
        </h1>
        <EditionSelector inline />
        <div className="flex-1" />
        <ThemePicker defaultTheme={defaultTheme} />
      </div>
      <EditionSelector />
    </>
  );
};
