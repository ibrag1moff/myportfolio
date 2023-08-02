// next
import Link from "next/link";

// icons
import { BsGithub, BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

// themes
import { useTheme } from "next-themes";

export default function Header() {
    const { theme, setTheme } = useTheme();
    return (
        <header className="headerContainer">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl sm:text-3xl lg:text-4xl">
                    <span className="font-bold text-[#fff700]">abbas</span>.dev
                </Link>
                <div className="flex gap-3 items-center md:gap-6">
                    <a
                        className="hover:text-[#fff700] transition-all duration-200"
                        href="https://github.com/ibrag1moff/"
                        target="__blank"
                    >
                        <BsGithub size={25} />
                    </a>
                    {theme === "dark" ? (
                        <button
                            className="hover:text-[#fff700] transition-all duration-200"
                            onClick={() => setTheme("light")}
                        >
                            <BsFillSunFill size={23} />
                        </button>
                    ) : (
                        <button
                            className="hover:text-[#fff700] transition-all duration-200"
                            onClick={() => setTheme("dark")}
                        >
                            <BsFillMoonStarsFill size={23} />
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}
