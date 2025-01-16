import { Link } from "@remix-run/react"
import { MenubarDemo, ProfileHeader } from "./NavBarHeader"
import { Separator } from "./ui/separator"
import ModeToggle from "./themeSwitcher"

export default function NavBar() {
    return (
        <div className="h-[40px]">
            <div className="flex flex-row justify-between px-3 py-1 items-center">
                <div className="flex flex-row items-center gap-4">
                    <Link to="/" className="flex flex-row items-center gap-[5px]">
                        <div className="p-3 bg-zinc-600 rounded-md"></div>
                        <h2 className="text-[14px] font-semibold uppercase">SprintSync</h2>
                    </Link>
                </div>
                {/* Centered MenubarDemo */}
                <div className="flex flex-1 justify-center">
                    <MenubarDemo />
                </div>
                {/* Right-side components */}
                <div className="flex flex-row items-center gap-2">
                    <ModeToggle />
                    <ProfileHeader />
                </div>
            </div>
            <Separator />
        </div>
    )
}
