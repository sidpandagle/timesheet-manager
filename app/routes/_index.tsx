import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "SprintSync" },
    { name: "description", content: "Welcome to SprintSync!" },
  ];
};

export default function Index() {

  return (
    <div className="h-[calc(100vh-40px)]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus incidunt dolores libero doloremque voluptatibus laborum saepe illum similique in est ullam fuga, officia quos perspiciatis neque sed alias inventore.
    </div>

  );
}
