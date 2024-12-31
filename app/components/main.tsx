/* eslint-disable @typescript-eslint/no-explicit-any */
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
import moment from "moment";
import React, { useState } from "react";
import { BsFillTagsFill, BsPlayCircleFill, BsStopCircleFill} from "react-icons/bs";
import { FaDollarSign, FaRegPlayCircle, FaFolderOpen } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { Calendar } from "~/components/ui/calendar";
import { Separator } from "~/components/ui/separator"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import {TaskEntryClass} from "./../shared/InstanceTypes"
import { DropdownMenuCheckboxes } from "./DashboardComp/dashview";
import { Input } from "./ui/input";

  export default function Main({ taskList }: Readonly<{taskList: TaskEntryClass[]}>) {

    const [taskEntry, setTaskEntry] = useState(new TaskEntryClass);
    const [taskEntries, setTaskEntries] = useState([{ "task": "Task 24", "time": 12625, "project": "Project 25", "billable": false, "startTime": 1733071818803, "endTime": 1733071831428, "tags": "Tagger 14, Tagger 35" }, { "task": "Task 44", "time": 45598, "project": "Project 7", "billable": false, "startTime": 1733158218803, "endTime": 1733158264401, "tags": "Tagger 3, Tagger 16" }, { "task": "Task 24", "time": 2195, "project": "Project 3", "billable": true, "startTime": 1733244618803, "endTime": 1733244620998, "tags": "Tagger 11, Tagger 39" }, { "task": "Task 19", "time": 26102, "project": "Project 49", "billable": false, "startTime": 1733331018803, "endTime": 1733331044905, "tags": "Tagger 41, Tagger 23" }, { "task": "Task 30", "time": 2513, "project": "Project 12", "billable": false, "startTime": 1733417418803, "endTime": 1733417421316, "tags": "Tagger 39, Tagger 48" }, { "task": "Task 5", "time": 85934, "project": "Project 35", "billable": true, "startTime": 1733503818803, "endTime": 1733503904737, "tags": "Tagger 11, Tagger 37" }, { "task": "Task 38", "time": 93496, "project": "Project 21", "billable": false, "startTime": 1733590218803, "endTime": 1733590312299, "tags": "Tagger 41, Tagger 33" }, { "task": "Task 41", "time": 39722, "project": "Project 48", "billable": false, "startTime": 1733676618803, "endTime": 1733676658525, "tags": "Tagger 47, Tagger 5" }, { "task": "Task 9", "time": 46856, "project": "Project 36", "billable": true, "startTime": 1733763018803, "endTime": 1733763065659, "tags": "Tagger 44, Tagger 3" }, { "task": "Task 44", "time": 67084, "project": "Project 47", "billable": false, "startTime": 1733849418803, "endTime": 1733849485887, "tags": "Tagger 21, Tagger 6" }, { "task": "Task 10", "time": 92459, "project": "Project 45", "billable": false, "startTime": 1733935818803, "endTime": 1733935911262, "tags": "Tagger 2, Tagger 45" }, { "task": "Task 21", "time": 24539, "project": "Project 6", "billable": true, "startTime": 1734022218803, "endTime": 1734022243342, "tags": "Tagger 36, Tagger 23" }, { "task": "Task 8", "time": 30650, "project": "Project 45", "billable": false, "startTime": 1734108618803, "endTime": 1734108649453, "tags": "Tagger 39, Tagger 24" }, { "task": "Task 34", "time": 83598, "project": "Project 34", "billable": false, "startTime": 1734195018803, "endTime": 1734195102401, "tags": "Tagger 43, Tagger 43" }, { "task": "Task 44", "time": 38631, "project": "Project 38", "billable": true, "startTime": 1734281418803, "endTime": 1734281457434, "tags": "Tagger 16, Tagger 15" }, { "task": "Task 25", "time": 88847, "project": "Project 45", "billable": false, "startTime": 1734367818803, "endTime": 1734367907650, "tags": "Tagger 13, Tagger 46" }, { "task": "Task 29", "time": 45302, "project": "Project 26", "billable": false, "startTime": 1734454218803, "endTime": 1734454264105, "tags": "Tagger 11, Tagger 49" }, { "task": "Task 11", "time": 949, "project": "Project 33", "billable": true, "startTime": 1734540618803, "endTime": 1734540619752, "tags": "Tagger 21, Tagger 11" }, { "task": "Task 34", "time": 16625, "project": "Project 25", "billable": false, "startTime": 1734627018803, "endTime": 1734627035428, "tags": "Tagger 43, Tagger 24" }, { "task": "Task 42", "time": 25669, "project": "Project 45", "billable": false, "startTime": 1734713418803, "endTime": 1734713444472, "tags": "Tagger 37, Tagger 48" }, { "task": "Task 23", "time": 81446, "project": "Project 35", "billable": true, "startTime": 1734799818803, "endTime": 1734799900249, "tags": "Tagger 1, Tagger 13" }, { "task": "Task 20", "time": 93103, "project": "Project 44", "billable": false, "startTime": 1734886218803, "endTime": 1734886311906, "tags": "Tagger 2, Tagger 25" }, { "task": "Task 3", "time": 75210, "project": "Project 28", "billable": false, "startTime": 1734972618803, "endTime": 1734972704013, "tags": "Tagger 48, Tagger 17" }, { "task": "Task 43", "time": 16384, "project": "Project 26", "billable": true, "startTime": 1735059018803, "endTime": 1735059035187, "tags": "Tagger 36, Tagger 21" }, { "task": "Task 6", "time": 75374, "project": "Project 31", "billable": false, "startTime": 1735145418803, "endTime": 1735145504177, "tags": "Tagger 3, Tagger 3" }, { "task": "Task 1", "time": 16667, "project": "Project 9", "billable": false, "startTime": 1735231818803, "endTime": 1735231835470, "tags": "Tagger 42, Tagger 27" }, { "task": "Task 38", "time": 89103, "project": "Project 47", "billable": true, "startTime": 1735318218803, "endTime": 1735318307906, "tags": "Tagger 2, Tagger 22" }, { "task": "Task 11", "time": 20987, "project": "Project 19", "billable": false, "startTime": 1735404618803, "endTime": 1735404639790, "tags": "Tagger 12, Tagger 45" }, { "task": "Task 20", "time": 41693, "project": "Project 27", "billable": false, "startTime": 1735491018803, "endTime": 1735491060496, "tags": "Tagger 23, Tagger 31" }, { "task": "Task 13", "time": 65628, "project": "Project 12", "billable": true, "startTime": 1735577418803, "endTime": 1735577484431, "tags": "Tagger 3, Tagger 41" }, { "task": "Task 1", "time": 70932, "project": "Project 7", "billable": false, "startTime": 1735663818803, "endTime": 173566389735, "tags": "Tagger 43, Tagger 40" }, { "task": "Task 47", "time": 33687, "project": "Project 48", "billable": false, "startTime": 1735750218803, "endTime": 1735750242490, "tags": "Tagger 3, Tagger 25" }, { "task": "Task 11", "time": 85859, "project": "Project 15", "billable": true, "startTime": 1735836618803, "endTime": 1735836704662, "tags": "Tagger 45, Tagger 36" }, { "task": "Task 14", "time": 81162, "project": "Project 10", "billable": false, "startTime": 1735923018803, "endTime": 1735923099965, "tags": "Tagger 20, Tagger 4" }, { "task": "Task 15", "time": 89854, "project": "Project 37", "billable": false, "startTime": 1736009418803, "endTime": 1736009508657, "tags": "Tagger 1, Tagger 1" }, { "task": "Task 22", "time": 34893, "project": "Project 29", "billable": true, "startTime": 1736095818803, "endTime": 1736095853696, "tags": "Tagger 39, Tagger 5" }, { "task": "Task 30", "time": 61517, "project": "Project 17", "billable": false, "startTime": 1736182218803, "endTime": 1736182280320, "tags": "Tagger 32, Tagger 17" }, { "task": "Task 34", "time": 50930, "project": "Project 15", "billable": false, "startTime": 1736268618803, "endTime": 173626869733, "tags": "Tagger 34, Tagger 16" }, { "task": "Task 37", "time": 80256, "project": "Project 10", "billable": true, "startTime": 1736355018803, "endTime": 173635509059, "tags": "Tagger 5, Tagger 39" }, { "task": "Task 47", "time": 23373, "project": "Project 30", "billable": false, "startTime": 1736441418803, "endTime": 173644142176, "tags": "Tagger 8, Tagger 30" }, { "task": "Task 24", "time": 33325, "project": "Project 22", "billable": false, "startTime": 1736527818803, "endTime": 1736527852128, "tags": "Tagger 5, Tagger 18" }, { "task": "Task 42", "time": 47665, "project": "Project 36", "billable": true, "startTime": 1736614218803, "endTime": 173661426468, "tags": "Tagger 13, Tagger 48" }, { "task": "Task 37", "time": 78260, "project": "Project 17", "billable": false, "startTime": 1736700618803, "endTime": 173670070063, "tags": "Tagger 34, Tagger 34" }, { "task": "Task 42", "time": 80168, "project": "Project 15", "billable": false, "startTime": 1736787018803, "endTime": 17367870971, "tags": "Tagger 44, Tagger 37" }, { "task": "Task 21", "time": 61945, "project": "Project 23", "billable": true, "startTime": 1736873418803, "endTime": 1736873748, "tags": "Tagger 37, Tagger 11" }]);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [intervalId, setIntervalId] = useState(setInterval(() => { }, 0));

    const toggleTimer = (start: boolean) => {
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
        taskEntry.tags = ['Tagger 1', 'Tagger 2'];
        taskEntry.endTime = Date.now();
        setTaskEntry(taskEntry);

        const newTaskEntries: any = [...taskEntries, taskEntry];
        setTaskEntries(newTaskEntries);
        console.log(newTaskEntries)
        resetTimer();
      }
    };

  function resetTimer() {
    clearInterval(intervalId);
    setElapsedTime(0);
    setIntervalId(setInterval(() => { }, 0));
    setTaskEntry(new TaskEntryClass);
  }
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setTaskEntry({ ...taskEntry, [name]: value });
  };

  const [date, setDate] = React.useState<Date>()

  function groupByDate(entries: any) {
    const grouped: any = {};

    entries.forEach((entry: any) => {
      const date = new Date(entry.startTime).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
      // Format as DD-MM-YYYY


      if (!grouped[date]) {
        grouped[date] = {
          day: date,
          taskEntries: [],
          totalTime: 0
        };
      }

      grouped[date].taskEntries.push(entry);
      grouped[date].totalTime += entry.time;
    });
    console.log(grouped)
    return Object.values(grouped);
  }

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        {/* Input Section */}
        <div className="flex items-center py-2 px-4 bg-zinc-0">
          <input
            type="text"
            className="outline-none text-sm font-semibold bg-white dark:bg-zinc-950 w-full"
            placeholder="What are you working on?"
            value={taskEntry.task}
            name="task"
            onChange={(e) => handleChange(e)}
          />
          <div className="gap-4 flex items-center text-sm">
            <Popover>
              <PopoverTrigger asChild><button><FaFolderOpen className="text-lg" /></button></PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>Calendar</CommandItem>
                      <CommandItem>Search Emoji</CommandItem>
                      <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    {/* <CommandGroup heading="Settings">
                      Integrate the time insert 
                    </CommandGroup> */}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center h-10"><BsFillTagsFill /></button>
              </PopoverTrigger>
              <PopoverContent className="w-40">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Tags</h4>
                  </div>
                  <div className="grid gap-2">
                    lorem
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center h-10"><FaDollarSign /></button>
              </PopoverTrigger>
              <PopoverContent className="w-40">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Billing</h4>
                  </div>
                  <div className="grid gap-2">
                    lorem
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <div className={`text-sm font-semibold flex items-center h-10 ${isTimerRunning ? "text-black" : ""}`}>
                  {moment.utc(elapsedTime).format('HH:mm:ss')}
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
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

        <Separator />

        {/* Task Entries */}
        <div className="flex h-[calc(100vh-4rem)] overflow-y-scroll">
          <div className="w-full text-sm mr-5">
            <div>
              {/* <div className="flex flex-col px-3 py-2">
                <div className="font-semibold text-lg">Welcome back, Bluesalt!</div>
                <p className="font-semibold text-xs text-zinc-400">Here&apos;s a list of your tasklist!</p>
              </div> */}
              <div className="flex flex-row gap-4 px-3 pb-5 pt-4">
                <Input placeholder="Filter Task!" className="border dark:border-zinc-600 outline-none w-1/3" />
                <DropdownMenuCheckboxes />
              </div>
            </div>

            {groupByDate(taskList).map((entry: any, dayIndex) => (
              <table key={dayIndex} className="w-full mb-3 bg-zinc-200 dark:bg-zinc-800 rounded-lg text-xs mx-3">
                <thead>
                  <tr className="">
                    <td className="px-4 py-2 w-1/4 font-semibold">{entry.day}</td>
                    <td className="px-4 py-2 w-1/5"></td>
                    <td className="px-4 py-2 w-1/5"></td>
                    <td className="px-4 py-2 w-1/5"></td>
                    <td className="px-4 py-2 w-1/5">{moment.utc(entry.totalTime).format('HH:mm:ss')}</td>
                  </tr>
                </thead>
                <tbody>
                  {entry.taskEntries.map((taskEntryValue: TaskEntryClass, entryIndex: any) => (
                    <tr key={entryIndex} className="duration-200">
                      <td className="px-4 py-2 w-1/4">{taskEntryValue.task}</td>
                      <td className="px-4 py-2 w-1/5">{taskEntryValue.project}</td>
                      <td className="px-4 py-2 w-1/5">{taskEntryValue.tags.map((r=>r + ' '))}</td>
                      <td className="px-4 py-2 w-1/5">{moment.utc(taskEntryValue.startTime).format('HH:mm:ss')} - {moment.utc(taskEntryValue.endTime).format('HH:mm:ss')}</td>
                      <td className="px-4 py-2 w-1/5">{moment.duration((taskEntryValue.time  / 1e9), 'seconds').hours()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}