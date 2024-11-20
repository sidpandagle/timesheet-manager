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
  const [startStop, useStartStop] = useState(false);
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
            <div className=" text-sm font-semibold ">00:00:20</div>
            <button onClick={() => useStartStop(!startStop)}>{startStop ? <BsPlayCircleFill className="text-3xl" /> : <BsStopCircleFill className="text-3xl" />}</button>
            <div>
              <button><FaRegPlayCircle /></button>
              <button><FaCirclePlus /></button>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(100vh-4rem)]">
          <div className="w-full h-full overflow-y-scroll">
            <div className="p-4">Workplace</div>
            {
              days.map((r, j) => {
                return (<table key={j} className="w-full mb-8 bg-slate-800">
                  <tr className="hover:bg-slate-100 duration-50">
                    <td className="p-4">{r}</td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4">00:00:20</td>
                  </tr>
                  {arr.map((s, i) => {
                    return (
                      <tr key={i} className="hover:bg-slate-100 duration-50">
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
