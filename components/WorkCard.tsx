// icons
import { FiCode } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

type WorkCardProps = {
    img: string;
    projectType: string;
    projectName: string;
    icon1?: any;
    icon2?: any;
    icon3?: any;
    icon4?: any;
    icon5?: any;
    liveLink: string;
    codeLink: string;
};

export default function WorkCard({
    img,
    projectType,
    projectName,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    liveLink,
    codeLink,
}: WorkCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col  max-w-[350px]"
        >
            <div className="cursor-pointer relative group transition-all duration-300">
                <img src={img} alt="ProjectImg" />
                <div className="hidden xl:group-hover:flex absolute top-0 left-0 bottom-0 right-0 z-30 bg-black/90">
                    <a
                        className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] font-bold hover:underline text-[#fff700] text-xl"
                        href={liveLink}
                        target="__blank"
                    >
                        Go to website
                    </a>
                </div>
            </div>

            <div className=" bg-white/30 dark:bg-black/30 pt-2 pb-4 px-4">
                <h5 className="font-semibold text-sm text-[#fff700]">
                    {projectType}
                </h5>
                <h1 className="font-bold text-2xl pb-2">{projectName}</h1>
                <div className="flex gap-4 pb-4">
                    <h5>Tools used:</h5>
                    <div className="flex items-center gap-3">
                        <motion.div
                            className="hover:text-[#fff700]"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            {icon1}
                        </motion.div>
                        <motion.div
                            className="hover:text-[#fff700]"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            {icon2}
                        </motion.div>
                        <motion.div
                            className="hover:text-[#fff700]"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            {icon3}
                        </motion.div>
                        <motion.div
                            className="hover:text-[#fff700]"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            {icon4}
                        </motion.div>
                        <motion.div
                            className="hover:text-[#fff700]"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            {icon5}
                        </motion.div>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <a
                        className="bg-[#fff700] relative group p-2 z-30 text-black font-bold cursor-pointer rounded-xl"
                        href={liveLink}
                        target="__blank"
                    >
                        <div className="absolute bottom-[-50px] right-[-20px] z-30 hidden xl:group-hover:flex">
                            <div className="bg-black dark:bg-white relative flex rounded-xl items-center p-2">
                                <div className="text-md text-white dark:text-black">
                                    Live
                                </div>
                            </div>
                        </div>
                        <BsArrowUpRight size={25} />
                    </a>
                    <a
                        className="bg-[#fff700] relative group p-2 text-black font-bold cursor-pointer rounded-xl"
                        href={codeLink}
                        target="__blank"
                    >
                        <div className="absolute bottom-[-50px] right-[-20px] z-30 hidden xl:group-hover:flex">
                            <div className="bg-black dark:bg-white relative flex rounded-xl items-center p-2">
                                <div className="text-md text-white dark:text-black">
                                    Code
                                </div>
                            </div>
                        </div>
                        <FiCode size={25} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
