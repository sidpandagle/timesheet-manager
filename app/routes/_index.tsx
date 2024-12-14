import type { MetaFunction } from "@remix-run/node";
import Main from "~/components/main";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Main />
  );
}
