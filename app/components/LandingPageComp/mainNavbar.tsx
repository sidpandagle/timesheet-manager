import { Link } from "@remix-run/react";
import LandingPageNavbar from "./LandingPageNavbar";
import ModeToggle from "../themeSwitcher";

export default function mainNavBar() {
    
    const buttonStyle = "font-bold px-4 py-2 rounded-md text-[15px] dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-200 hover:bg-zinc-300 duration-200";
    return (
        <div className="flex items-center px-4 py-3 justify-between">
            <div className="flex items-center gap-2">
                <div className="p-4 bg-zinc-600 rounded-md"></div>
                <h1 className="font-bold text-[20px]">SprintSync</h1>
            </div>
            <LandingPageNavbar />
            <div className="flex items-center gap-3">
                <Link to="/login"><button className={buttonStyle}>Login</button></Link>
                <Link to="/login"><button className={buttonStyle}>Sign Up</button></Link>
                <ModeToggle />
            </div>
        </div>
    )
}