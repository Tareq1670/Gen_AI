"use client";
import Link from "next/link";
import { BiLogoMailchimp } from "react-icons/bi";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import NavLogin from "./NavLogin";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const pathName = usePathname();

    const getClick = (path) => {
        return path === pathName ? "border-b-2 border-blue-500 font-bold" : "";
    };

    const links = (
        <>
            <li className={`${getClick("/")}`}>
                <Link href={"/"}>Home</Link>
            </li>
            <li className={`${getClick("/all-photos")}`}>
                <Link href={"/all-photos"}>All Photos</Link>
            </li>
            <li className={`${getClick("/pricing")}`}>
                <Link href={"/pricing"}>Pricing</Link>
            </li>
        </>
    );

    useEffect(() => {
        setOpen(false)
    },[pathName])

    return (
        <div className="flex items-center justify-between py-4 border-b border-zinc-300 relative">
            <div className="flex items-center space-x-2">
                <BiLogoMailchimp className="text-3xl" />
                <h2 className="text-2xl font-bold">Gen_AI</h2>
            </div>
            <div className="hidden md:flex">
                <ul className="flex items-center space-x-4 font-medium">
                    {links}
                </ul>
            </div>
            <div className="flex  md:hidden">
                <Hamburger toggle={setOpen} toggled={isOpen}></Hamburger>
            </div>
            <div className="hidden md:flex items-center space-x-2">
                <ThemeToggle />
                <NavLogin />
            </div>
            {isOpen && (
                <div className={`absolute container mx-auto w-full bg-accent flex md:hidden flex-col items-center top-20 justify-center text-center space-y-2 py-4 z-50 `}>
                    <ul className="flex flex-col">{links}</ul>
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <NavLogin />
                    </div>
                </div>
            )}
            {isOpen && (
                <div
                    onClick={() => setOpen(false)}
                    onTouchMove={() => setOpen(false)}
                    className="fixed bg-accent/10 inset-0 z-40 flex md:hidden"
                ></div>
            )}
        </div>
    );
};

export default Navbar;
