"use client"
import { useTheme } from "next-themes"
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "~/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex size-8 relative items-center justify-center rounded-md bg-zinc-200 outline-none hover:bg-zinc-300 duration-200 dark:bg-zinc-800 dark:hover:bg-zinc-700">
          <IoSunny className="absolute size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FaMoon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* <span className="sr-only">Toggle theme</span> */}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}