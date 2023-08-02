"use client";
// framer motion
import { motion } from "framer-motion";

// components
import SkillCard from "@/components/SkillCard";
import HireMeBtn from "@/components/HireMeBtn";
import MySkills from "@/components/MySkills";

export default function About() {
    return (
        <div className="py-3 pb-20  container">
            <motion.div
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "10%" }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <h4 className="text-center text-[#fff700] font-medium text-2xl mb-3">
                    Get To Know
                </h4>
                <h1 className="text-center font-bold text-4xl relative mb-12 title md:text-5xl">
                    About Me
                </h1>
                <div className="flex flex-col items-center gap-4 md:flex-row mb-12 md:justify-evenly">
                    <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="rounded-xl w-[300px]"
                        src="about.jpg"
                        alt="AboutImg"
                    />
                    <div className="flex flex-col">
                        <div className="flex flex-wrap gap-4 items-center justify-center py-8 md:w-[400px] md:mx-auto">
                            <SkillCard title="html" />
                            <SkillCard title="css" />
                            <SkillCard title="javascript" />
                            <SkillCard title="context api" />
                            <SkillCard title="react" />
                            <SkillCard title="redux" />
                            <SkillCard title="axios" />
                            <SkillCard title="framer motion" />
                            <SkillCard title="next js" />
                            <SkillCard title="vite" />
                            <SkillCard title="typescript" />
                            <SkillCard title="sass" />
                            <SkillCard title="gulp" />
                            <SkillCard title="node js" />
                            <SkillCard title="express" />
                            <SkillCard title="tailwind" />
                            <SkillCard title="bootstrap" />
                        </div>
                        <p className="text-center md:max-w-[400px] md:mx-auto">
                            Welcome! I&apos;m Abbas Ibragimov, experienced
                            Software engineer from Baku, Azerbaijan.Are you
                            looking for a professional Developer to help you
                            build a website on time and on budget? I provide
                            quality FrontEnd & BackEnd development services for
                            small businesses as well as for big companies.I have
                            plenty of experience, working with
                            HTML,CSS,JavaScript,React, Next js and etc.. Make
                            sure to contact me!
                        </p>
                    </div>
                </div>
                <div>
                    <HireMeBtn />
                </div>
                <div>
                    <MySkills />
                </div>
            </motion.div>
        </div>
    );
}
