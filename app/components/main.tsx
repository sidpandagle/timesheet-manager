/* eslint-disable @typescript-eslint/no-explicit-any */
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
import moment from "moment";
import React, { useState } from "react";
import { BsFillTagsFill, BsPlayCircleFill, BsStopCircleFill } from "react-icons/bs";
import { FaDollarSign, FaRegPlayCircle, FaFolderOpen } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { Calendar } from "~/components/ui/calendar";
import { Separator } from "~/components/ui/separator"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import { TaskEntryClass } from "./../shared/InstanceTypes"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuCheckboxes } from "./DashboardComp/dashview";
import { Input } from "./ui/input";
import { PopoverClose } from "@radix-ui/react-popover";

export default function Main({ taskList, projectList, tagList }: Readonly<{ taskList: TaskEntryClass[], projectList: any[], tagList: any[] }>) {

  const [taskEntry, setTaskEntry] = useState(new TaskEntryClass);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(setInterval(() => { }, 0));
  const [date, setDate] = React.useState<Date>()

  const toggleTimer = async (start: boolean) => {
    setIsTimerRunning(start);
    if (start) {
      taskEntry.startTime = moment().valueOf();
      const interval = setInterval(() => {
        const elapsedMilliseconds = moment().valueOf() - taskEntry.startTime;
        setElapsedTime(Number(moment(elapsedMilliseconds).valueOf()));
        setTaskEntry(taskEntry);
      }, 1000);

      // Write a start timer API here

      setIntervalId(interval);
    } else {
      taskEntry.time = elapsedTime;
      taskEntry.endTime = Date.now();

      const tempTaskEntry: any = { ...taskEntry };
      tempTaskEntry.startTime = moment(tempTaskEntry.startTime).utc().format()
      tempTaskEntry.endTime = moment(tempTaskEntry.endTime).utc().format()
      const response = await fetch("https://p010824-timesheet-manager-backend.7c2g7o.easypanel.host/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tempTaskEntry),
      });
      if (response.ok) {
        // Handle success (e.g., redirect or show success message)
        console.log("Task added successfully!");
      } else {
        // Handle error
        console.error("Failed to add task");
      }
      setTaskEntry(taskEntry);
      resetTimer();
    }
  };

  function resetTimer() {
    clearInterval(intervalId);
    setElapsedTime(0);
    setIntervalId(setInterval(() => { }, 0));
    setTaskEntry(new TaskEntryClass);
  }

  const inputHandleChange = (e: any) => {
    const { name, value } = e.target;
    setTaskEntry({ ...taskEntry, [name]: value });
  };

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
    return Object.values(grouped);
  }

  function calculateDuration(value: any) {
    const duration = moment.duration(value / 1e6)
    return `${Math.floor(duration.asHours()).toString().padStart(2, '0')}:${duration.minutes().toString().padStart(2, '0')}`
  }

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        {/* Input Section */}
        <div className="flex items-center py-2 px-4 bg-zinc-0">
          {/* Task Input */}
          <input
            type="text"
            className="outline-none text-sm font-semibold bg-white dark:bg-zinc-950 w-full"
            placeholder="What are you working on?"
            value={taskEntry.task}
            name="task"
            onChange={(e) => inputHandleChange(e)}
          />
          {/* Action Buttons */}
          <div className="gap-4 flex items-center text-sm">
            {/* Projects */}
            <Popover>
              <PopoverTrigger asChild>
                <button>  {taskEntry.project ? taskEntry.project : <FaFolderOpen className="text-lg" />}</button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput placeholder="Search by project" />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      {projectList.map((project, index) => (
                        <CommandItem
                          key={index}
                        >
                          <PopoverClose>
                            <button
                              onClick={() => setTaskEntry({ ...taskEntry, project: project.project })}
                            >

                              {project.project}
                            </button>
                          </ PopoverClose>
                        </CommandItem>
                      ))}
                    </CommandGroup>

                    <CommandSeparator />
                    <CommandGroup>
                      <CommandItem className="justify-center">+ Create a new project</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Tags */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center h-10"><BsFillTagsFill /></button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput placeholder="Search by tag" />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        {tagList.map((tag, index) => (
                          (<CommandItem key={index}>
                            <PopoverClose>
                            <button
                              onClick={() => setTaskEntry({ ...taskEntry, tags: [tag.tag] })}
                            >
                              {tag.tag}
                            </button>
                          </ PopoverClose>
                          </CommandItem>)
                        ))}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup>
                        <CommandItem className="justify-center">+ Create a new tag</CommandItem>
                      </CommandGroup>
                    </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Billing */}
            <button className="flex items-center h-10 text-slate-400"><FaDollarSign /></button>

            {/* Timer / Calendar */}
            <Popover>
              <PopoverTrigger asChild>
                <div className={`text-sm flex items-center h-10 ${isTimerRunning ? "font-bold" : "font-semibold"}`}>
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

            {/* Start / Stop Timer */}
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
          <div className="w-full text-sm mr-5"><div className="flex flex-row gap-4 px-3 p-3">
            <Input placeholder="Filter Task!" className="border dark:border-zinc-600 outline-none w-1/3" />
            <DropdownMenuCheckboxes />
          </div>
            <div className="flex items-center justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {/* <Button variant="outline">Sort Projects By</Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Sort Projects By</DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {groupByDate(taskList).map((entry: any, dayIndex) => (
              <table key={dayIndex} className="w-full mb-3 bg-zinc-200 dark:bg-zinc-800 rounded-lg text-xs mx-3">
                <thead>
                  <tr className="">
                    <td className="px-4 py-2 w-1/4 font-semibold">{entry.day}</td>
                    <td className="px-4 py-2 w-1/5"></td>
                    <td className="px-4 py-2 w-1/5"></td>
                    <td className="px-4 py-2 w-1/5"></td>
                    <td className="px-4 py-2 w-1/5">{calculateDuration(entry.totalTime)}</td>
                  </tr>
                </thead>
                <tbody>
                  {entry.taskEntries.map((taskEntryValue: TaskEntryClass, entryIndex: any) => (
                    <tr key={entryIndex} className="hover:bg-zinc-300 hover:text-black duration-200">
                      <td className="px-4 py-2 w-1/4">{taskEntryValue.task}</td>
                      <td className="px-4 py-2 w-1/5">{taskEntryValue.project}</td>
                      <td className="px-4 py-2 w-1/5">{taskEntryValue.tags.map((res) => res + ' ')}</td>
                      <td className="px-4 py-2 w-1/5">{moment.utc(taskEntryValue.startTime).format('HH:mm:ss')} - {moment.utc(taskEntryValue.endTime).format('HH:mm:ss')}</td>
                      <td className="px-4 py-2 w-1/5">{calculateDuration(taskEntryValue.time)}</td>
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