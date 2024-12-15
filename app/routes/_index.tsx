import type { MetaFunction } from "@remix-run/node";
import Main from "~/components/main";

export const meta: MetaFunction = () => {
  return [
    { title: "TimeSheetManager" },
    { name: "description", content: "Welcome to TimeSheetManager!" },
  ];
};

export default function Index() {
  return (
    <Main />
  );
}
