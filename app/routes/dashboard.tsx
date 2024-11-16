import { Link } from "@remix-run/react";
import { useState } from "react";
import { CgPlayButton, CgPlayPause, CgPlayStop } from "react-icons/cg";

export default function Dashboard() {
  const arr = [...new Array(10)];
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
        <div className="flex h-[calc(100%-4rem)]">
          <div className="w-1/2 border-r  border-slate-500 p-4 flex flex-col gap-4">
              <div className="flex flex-col items-center justify-around rounded-md w-full">
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
            <div className="w-1/2">
              <table className="w-full">
                <tr>
                  <td>Today</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>00:00:20</td>
                </tr>
                <tr>
                  <td>Work 2</td>
                  <td>Project 2</td>
                  <td>Tag1, Tag2</td>
                  <td>1:53 PM - 1:53 PM</td>
                  <td>0:00:12</td>
                </tr>
              </table>
            </div>
        </div>
      </div>
    </div>
  )
}
