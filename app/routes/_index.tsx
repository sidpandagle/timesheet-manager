import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useTheme } from "~/themetoggle";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <button className="w-48 text-center bg-slate-600 text-white px-4 py-2 rounded-md" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <Link to='/login' className="w-48 text-center bg-slate-600 text-white px-4 py-2 rounded-md">
        Login
      </Link>
      <Link to='/dashboard' className="w-48 text-center bg-slate-600 text-white px-4 py-2 rounded-md">
        Dashboard
      </Link>

    </div>
  );
}
