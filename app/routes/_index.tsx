import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Main from "~/components/main";

export const meta: MetaFunction = () => {
  return [
    { title: "SprintSync" },
    { name: "description", content: "Welcome to SprintSync!" },
  ];
};

export async function loader() {
  try {
    // Concurrently fetch all the required data
    const [taskResponse, projectResponse, tagResponse] = await Promise.all([
      fetch("https://p010824-timesheet-manager-backend.7c2g7o.easypanel.host/api/tasks"),
      fetch("https://p010824-timesheet-manager-backend.7c2g7o.easypanel.host/api/projects"),
      fetch("https://p010824-timesheet-manager-backend.7c2g7o.easypanel.host/api/tags"),
    ]);

    // Check if all responses are successful
    if (!taskResponse.ok || !projectResponse.ok || !tagResponse.ok) {
      throw new Error(
        `Failed to fetch data: ${!taskResponse.ok ? taskResponse.statusText :
          !projectResponse.ok ? projectResponse.statusText : tagResponse.statusText}`
      );
    }

    // Parse all JSON data concurrently
    const [taskList, projectList, tagList] = await Promise.all([
      taskResponse.json(),
      projectResponse.json(),
      tagResponse.json(),
    ]);

    return {
      taskList,
      projectList,
      tagList,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Failed to load data", { status: 500 });
  }
}


export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <Main
        taskList={data.taskList.data}
        projectList={data.projectList.data}
        tagList={data.tagList.data} />
    </div>

  );
}
