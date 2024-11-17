import { Link } from "@remix-run/react";
import { useState } from "react";
import { CgPlayButton, CgPlayPause, CgPlayStop } from "react-icons/cg";

export default function Dashboard() {
  const arr = [...new Array(10)];
  const days = ['Today', 'Yesterday', 'Day Before'];
  const [startStop, useStartStop] = useState(false);
  return (
    <div className="flex bg-slate-900 text-slate-500 min-h-screen">
      <div className="border-r border-slate-500 flex flex-col gap-1">
      <div className="h-16 flex items-center px-4 font-bold">Logo</div>
        {arr.map((r, i)=>{
          return (<button key={i} className="p-2 m-2 hover:bg-slate-400 rounded-md duration-100">Icon</button>)
        })}
      </div>
      <div className="flex-1">
        <div className="h-16 border-b  border-slate-500 flex items-center px-4">
          <div className="text-3xl">Dashboard</div>
        </div>
        <div className="flex h-[calc(100vh-4rem)]">
          <div className="w-1/3 border-r  border-slate-500 p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-4 items-center justify-around rounded-md w-full">
                <div className="text-center">
                  <div className="heading">What are you working on?</div>
                  <div className="text-sm">Start Time Entry</div>
                </div>
                <button onClick={()=>useStartStop(!startStop)}>
                {startStop ? 
                <div className="border-[1px] border-slate-500 p-2 rounded-full">
                  <CgPlayStop className="text-4xl" /> 
                </div>
                  :
                <div className="border-[1px] border-slate-500 p-2 rounded-full">
                  <CgPlayButton className="text-4xl" />
                </div>
                  }
                  </button>
                <div className="text-xl">00:00:00</div>
              </div>
            </div>
            <div className="w-2/3 h-full overflow-scroll">
              <div className="text-2xl p-4">Workplace</div>
                {days.map(r=>{
              return (<table className="w-full mb-8 bg-slate-800">
                <tr className="hover:bg-slate-100 duration-50">
                    <td className="p-4">{r}</td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4">00:00:20</td>
                  </tr>
                {arr.map(s=>{
                  return (
                    <tr className="hover:bg-slate-100 duration-50">
                      <td className="p-4">Work 2</td>
                      <td className="p-4">Project 2</td>
                      <td className="p-4">Tag1, Tag2</td>
                      <td className="p-4">1:53 PM - 1:53 PM</td>
                      <td className="p-4">0:00:12</td>
                    </tr>
                    )
                })}
              </table>)
                })}
            </div>
        </div>
      </div>
    </div>
  )
}
