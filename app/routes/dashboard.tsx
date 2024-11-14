import { Link } from "@remix-run/react";

export default function Dashboard() {
  const arr = [...new Array(10)];
  return (
    <div className="flex bg-slate-900 text-slate-500 min-h-screen">
      <div className="border-r border-slate-500 flex flex-col gap-1">
      <div className="h-16 flex items-center px-4 font-bold">Logo</div>
        {arr.map(r=>{
          return (<button className="p-2 m-2 hover:bg-slate-400 rounded-md duration-100">Icon</button>)
        })}
      </div>
      <div className="flex-1">
        <div className="h-16 border-b  border-slate-500 flex items-center px-4">
          <div className="text-3xl">Dashboard</div>
        </div>
        <div className="flex h-[calc(100%-4rem)]">
          <div className="w-3/4 border-r  border-slate-500 p-4 flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1 border p-2 rounded-sm border-slate-500">Block</div>
              <div className="flex-1 border p-2 rounded-sm border-slate-500">Block</div>
              <div className="flex-1 border p-2 rounded-sm border-slate-500">Block</div>
            </div>
            <div>Projects</div>
          </div>
          <div className="p-4">Activity</div>
        </div>
      </div>
    </div>
  )
}
