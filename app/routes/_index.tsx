import type { MetaFunction } from "@remix-run/node";
import MainNavBar from "~/components/LandingPageComp/mainNavbar";

export const meta: MetaFunction = () => {
  return [
    { title: "SprintSync" },
    { name: "description", content: "Welcome to SprintSync!" },
  ];
};

export default function Index() {
  // Thumb rule for white is zinc-100 or zinc-200
  return (
    <div>
      <MainNavBar />
      
      {/* Hero */}
      <div className="flex justify-center flex-col items-center h-screen">
        <h1 className="text-3xl font-bold">This is the Landing Page!</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Voluptates atque necessitatibus maiores sit similique voluptatibus eos quas, <br/>omnis corrupti quibusdam, reiciendis laudantium! Sequi, vel iste nisi atque iusto enim. Quas.</p>
      </div>
    </div>

  );
}
