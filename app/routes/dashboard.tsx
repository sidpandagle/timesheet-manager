import moment from "moment";
import { useState } from "react";
import { 
  BsFillTagsFill, 
  BsPlayCircleFill, 
  BsStopCircleFill 
} from "react-icons/bs";
import { FaDollarSign, FaRegPlayCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoFolderOpenSharp } from "react-icons/io5";
import { TbBrandThreejs } from "react-icons/tb";

export default function Dashboard() {
  const entries = Array.from({ length: 6 });
  const days = ['Today', 'Yesterday', 'Day Before'];

  const [taskEntry, setTaskEntry] = useState(new TaskEntryClass);
  const [taskEntries, setTaskEntries] = useState([]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(setInterval(() => {}, 0));

  const toggleTimer = (start:boolean) => {
    setIsTimerRunning(start);

    if (start) {
      taskEntry.startTime = moment().valueOf();
      const interval = setInterval(() => {
        const elapsedMilliseconds = moment().valueOf() - taskEntry.startTime;
        setElapsedTime(Number(moment(elapsedMilliseconds).valueOf()));
        setTaskEntry(taskEntry);
      }, 1000);
      setIntervalId(interval);
    } else {
      taskEntry.time = elapsedTime;
      taskEntry.project = 'Project 1';
      taskEntry.tags = 'Tagger 1, Tagger 2';
      taskEntry.endTime = Date.now();
      setTaskEntry(taskEntry);
      
      const newTaskEntries:any = [...taskEntries, taskEntry];
      setTaskEntries(newTaskEntries);
      console.log(newTaskEntries)
      resetTimer();
    }
  };
  
  function resetTimer(){
    clearInterval(intervalId);
    setElapsedTime(0);
    setIntervalId(setInterval(() => {}, 0));
    setTaskEntry(new TaskEntryClass);
  }
  // function getDateFormat(value:number, format: string = ''){
  //   return new Date(value).toISOString().substr(11, 8);
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskEntry({ ...taskEntry, [name]: value });
  };

  function requiredTaskEntries(){
    // Add to add and substract moment and get Today / Yesterday, etc
    // moment().subtract(1, "days")
    const customTaskEntries = [
      {
        day: 'Today',
        taskEntries : taskEntries,
        totalTime : taskEntries.reduce((total, entry) => total + entry.time, 0)
      }
    ]
    return customTaskEntries;
  }

  return (
    <div className="flex bg-slate-900 text-slate-500 min-h-screen">
      {/* Sidebar */}
      <div className="flex flex-col gap-1">
        <div className="h-16 flex items-center px-4 font-bold">
          <TbBrandThreejs />
        </div>
        {entries.map((_, index) => (
          <button 
            key={index} 
            className="p-2 m-2 hover:bg-slate-400 rounded-md flex justify-center items-center"
          >
            <TbBrandThreejs />
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Input Section */}
        <div className="flex items-center py-2 px-4">
          <input 
            type="text" 
            className="outline-none text-sm font-semibold text-slate-50 bg-slate-900 w-full" 
            placeholder="What are you working on?" 
            value={taskEntry.task}
            name="task" 
            onChange={(e)=>handleChange(e)}
          />
          <div className="gap-4 flex items-center">
            <button><IoFolderOpenSharp /></button>
            <button><BsFillTagsFill /></button>
            <button><FaDollarSign /></button>
            <div className={`text-sm font-semibold ${isTimerRunning ? "text-slate-50" : ""}`}>
              {moment.utc(elapsedTime).format('HH:mm:ss')}
            </div>
            <button onClick={() => toggleTimer(!isTimerRunning)}>
              {isTimerRunning ? 
                <BsStopCircleFill className="text-3xl" /> : 
                <BsPlayCircleFill className="text-3xl" />
              }
            </button>
            <div>
              <button><FaRegPlayCircle /></button>
              <button><FaCirclePlus /></button>
            </div>
          </div>
        </div>

        {/* Task Entries */}
        <div className="flex h-[calc(100vh-4rem)] overflow-y-scroll">
          <div className="w-full text-sm">
            <div className="px-4 py-2">Workplace</div>
            {requiredTaskEntries().map((entry, dayIndex) => (
              <table key={dayIndex} className="w-full mb-8 bg-slate-800">
                <thead>
                  <tr className="hover:bg-slate-400 hover:text-slate-800 duration-50">
                    <td className="px-4 py-2 w-1/4">{entry.day}</td>
                    <td className="px-4 py-2 w-1/5"></td>
                    <td className="px-4 py-2 w-1/5"></td>
                    <td className="px-4 py-2 w-1/5"></td>
                    <td className="px-4 py-2 w-1/5">{moment.utc(entry.totalTime).format('HH:mm:ss')}</td>
                  </tr>
                </thead>
                <tbody>
                  {entry.taskEntries.map((taskEntryValue:TaskEntryClass, entryIndex) => (
                    <tr key={entryIndex} className="hover:bg-slate-400 hover:text-slate-800 duration-50">
                      <td className="px-4 py-2 w-1/4">{taskEntryValue.task}</td>
                      <td className="px-4 py-2 w-1/5">{taskEntryValue.project}</td>
                      <td className="px-4 py-2 w-1/5">{taskEntryValue.tags}</td>
                      <td className="px-4 py-2 w-1/5">{moment.utc(taskEntryValue.startTime).format('HH:mm:ss')} - {moment.utc(taskEntryValue.endTime).format('HH:mm:ss')}</td>
                      <td className="px-4 py-2 w-1/5">{moment.utc(taskEntryValue.time).format('HH:mm:ss')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export class TaskEntryClass{
  task:string = '';
  time:number = 0;
  project:string = '';
  billable:boolean =  false;
  startTime:number =  0;
  endTime:number =  0;
  tags:string = '';
}
