"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon } from "react-icons/bi";
import { IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    return (
        
            <div className="text-xl cursor-pointer">
                <div>
                    {theme === "dark" ? (
                        <IoSunny onClick={() => setTheme("light")} />
                    ) : (
                        <BiMoon onClick={() => setTheme("dark")} />
                    )}
                </div>
            </div>
    );
};

export default ThemeToggle;
