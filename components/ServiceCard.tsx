// next link
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

// icons
import { BsArrowRight } from "react-icons/bs";

type ServiceCardProps = {
    title: string;
    icon: JSX.Element;
    info: string;
};

export default function ServiceCard({ title, icon, info }: ServiceCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/30 dark:bg-black/30 p-4 max-w-[350px] sm:w-[400px] h-[300px] hover:bg-white/10 dark:hover:bg-black/10 rounded-sm"
        >
            <div className="flex flex-col items-start sm:items-center sm:justify-center gap-3">
                <span className="text-[#fff700]">{icon}</span>
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="max-w-[250px] font-semibold  sm:text-center">
                    {info}
                </p>
                <Link className="text-3xl hover:translate-x-2" href="/feedback">
                    <BsArrowRight />
                </Link>
            </div>
        </motion.div>
    );
}
