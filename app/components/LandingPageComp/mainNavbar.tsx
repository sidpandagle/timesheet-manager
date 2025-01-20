import { Link } from "@remix-run/react";
import LandingPageNavbar from "./LandingPageNavbar";
import ModeToggle from "../themeSwitcher";

export default function mainNavBar() {
    
    const buttonStyle = "font-semibold px-3 py-1.5 rounded-md text-[13px] dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-200 hover:bg-zinc-300 duration-200";
    return (
        <div className="flex items-center px-4 py-3 justify-between">
            <div className="flex items-center gap-2">
                <div className="p-[13px] bg-zinc-600 rounded-md"></div>
                <h1 className="font-semibold text-[18px]">SprintSync</h1>
            </div>
            <LandingPageNavbar />
            <div className="flex items-center gap-3">
                <Link to="/login"><button className={buttonStyle}>Login</button></Link>
                <Link to="/signup"><button className={buttonStyle}>Sign Up</button></Link>
                <ModeToggle />
            </div>
        </div>
    )
}