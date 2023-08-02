// next
import { Metadata } from "next";
import Link from "next/link";

export const medata: Metadata = {
    title: "fefe",
};

const NotFound = () => {
    return (
        <div className="bg-gradient-to-r from-[#283048] to-[#475357] dark:bg-gradient-to-r dark:from-[#0f0c29] dark:to-[#1f1f39] h-screen w-full">
            <div className="absolute text-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <h1 className="text-7xl font-bold">404</h1>
                <h1 className="text-4xl font-bold mb-8">page not found</h1>
                <Link
                    className="bg-[#fff700] py-2 px-8 text-black font-bold rounded-2xl"
                    href="/"
                >
                    Go back
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
