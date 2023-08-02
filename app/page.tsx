"use client";
// typewriter
import { useTypewriter, Cursor } from "react-simple-typewriter";

// framer motion
import { motion } from "framer-motion";

export default function Home() {
    const [text] = useTypewriter({
        words: ["Abbas Ibragimov.", "Software Engineer.", "Developer."],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="py-8"
        >
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                        src="me.png"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: "-60%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "-60%" }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center"
                >
                    <h5 className="text-2xl">Hi I am</h5>
                    <h1 className="font-bold text-[#fff700] text-3xl sm:text-4xl lg:text-5xl mb-8">
                        {text}
                        <Cursor />
                    </h1>
                </motion.div>
            </div>
        </motion.div>
    );
}
