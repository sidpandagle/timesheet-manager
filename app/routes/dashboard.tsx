import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { useState } from "react";
import { BsFillTagsFill, BsPlayCircleFill, BsStopCircleFill } from "react-icons/bs";
import { CgPlayButton, CgPlayStop } from "react-icons/cg";
import { FaDollarSign, FaPlay, FaRegPlayCircle, FaRegStopCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoFolderOpenSharp } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";

export default function Dashboard() {
  const arr = [...new Array(6)];
  const days = ['Today', 'Yesterday', 'Day Before'];
  const [taskEntries, useTaskEntries] = useState([]);
  const [startStop, useStartStop] = useState(false);
  const [time, useTime] = useState('00:00:00');
  const [currentSetInterval, useCurrentSetInterval] = useState(null);
  
  const startTimer = (start: boolean) => {
    useStartStop(start)
    if (start) {
      const initialTime = new Date();
      let interval = setInterval(() => {
        const milliseconds = new Date(new Date() - initialTime).toISOString().slice(11, 19);
        useTime(milliseconds);
      }, 1000)
      useCurrentSetInterval(interval)
    }else{
      clearInterval(currentSetInterval)
      useTaskEntries([...taskEntries, time]);
      useTime('00:00:00');
    }
  }
  return (
    <div className="flex bg-slate-900 text-slate-500 min-h-screen">
      <div className="flex flex-col gap-1">
        <div className="h-16 flex items-center px-4 font-bold"><MdOutlineTimer /></div>
        {arr.map((r, i) => {
          return (<button key={i} className="p-2 m-2 hover:bg-slate-400 rounded-md flex justify-center items-center duration-100"><MdOutlineTimer /></button>)
        })}
      </div>
      <div className="flex-1">
        <div className="flex items-center py-2 px-4">
          <input type="text" className="outline-none text-sm font-semibold text-slate-50 bg-slate-900 w-full" placeholder="What are you working on?" />
          <div className="gap-4 flex items-center ">
            <button><IoFolderOpenSharp /></button>
            <button><BsFillTagsFill /></button>
            <button><FaDollarSign /></button>
            <div className={`text-sm font-semibold ${startStop ? "text-slate-50" : ""}`} >{time}</div>
            <button onClick={() => startTimer(!startStop)}>{startStop ? <BsStopCircleFill className="text-3xl" /> : <BsPlayCircleFill className="text-3xl" /> }</button>
            <div>
              <button><FaRegPlayCircle /></button>
              <button><FaCirclePlus /></button>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(100vh-4rem)]">
          <div className="w-full h-full text-sm overflow-y-scroll">
            <div className="px-4 py-2">Workplace</div>
            {
              days.map((r, j) => {
                return (<table key={j} className="w-full mb-8 bg-slate-800">
                  <tr className="hover:bg-slate-100 duration-50">
                    <td className="px-4 py-2">{r}</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">00:00:20</td>
                  </tr>
                  {arr.map((s, i) => {
                    return (
                      <tr key={i} className="hover:bg-slate-100 duration-50">
                        <td className="px-4 py-2">Work 2</td>
                        <td className="px-4 py-2">Project 2</td>
                        <td className="px-4 py-2">Tag1, Tag2</td>
                        <td className="px-4 py-2">1:53 PM - 1:53 PM</td>
                        <td className="px-4 py-2">0:00:12</td>
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
