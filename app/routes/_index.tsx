import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Main from "~/components/main";

export const meta: MetaFunction = () => {
  return [
    { title: "TimeSheetManager" },
    { name: "description", content: "Welcome to TimeSheetManager!" },
  ];
};

export async function loader() {
  try {
    const response = await fetch(
      // "https://p010824-timesheet-manager-backend.7c2g7o.easypanel.host/api/tasks"
      "http://127.0.0.1:3001/api/tasks"
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Failed to load data", { status: 500 }); 
  }
}

export default function Index() {
  const taskList = useLoaderData(); 

  return (
    <div>
      <Main taskList={taskList.data}/> 
    </div>
  );
}
