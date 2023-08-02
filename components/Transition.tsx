// framer motion
import { motion } from "framer-motion";

const transitionVariants = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0", "100%"],
    },
};

export default function Transition() {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#283048e7] dark:bg-[#fff700de]"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitionVariants}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black/30 dark:bg-[#fff700ab]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-black/60 dark:bg-[#fff70065]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
            ></motion.div>
        </>
    );
}
