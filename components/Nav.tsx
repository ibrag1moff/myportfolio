"use client";
// next link
import Link from "next/link";

// icons
import { AiFillHome } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoMdBriefcase } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";

// pathname
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();
    const navLinks = [
        {
            name: "home",
            path: "/",
            icon: <AiFillHome size={22} />,
        },
        {
            name: "about",
            path: "/about",
            icon: <BiSolidUserCircle size={22} />,
        },
        {
            name: "works",
            path: "/works",
            icon: <IoMdBriefcase size={22} />,
        },
        {
            name: "services",
            path: "/services",
            icon: <MdSpaceDashboard size={22} />,
        },
        {
            name: "feedback",
            path: "/feedback",
            icon: <RiFeedbackFill size={22} />,
        },
    ];
    return (
        <nav className="fixed left-1/2 z-20 translate-x-[-50%] bottom-0 sm:bottom-3 bg-white/40 dark:bg-white/5 w-full flex items-center justify-center sm:w-max h-max rounded-full py-5 px-12 backdrop-blur-lg">
            <div className="flex gap-10">
                {navLinks.map((link, i) => {
                    return (
                        <Link
                            className={`${
                                link.path === pathname && "text-[#fff700]"
                            } relative items-center group transition-all duration-300`}
                            key={i}
                            href={link.path}
                        >
                            <div className="absolute top-[-50px] left-0 hidden xl:group-hover:flex">
                                <div className="bg-black dark:bg-white relative flex rounded-xl items-center p-2">
                                    <div className="text-md text-white dark:text-black">
                                        {link.name}
                                    </div>
                                </div>
                            </div>
                            {link.icon}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
