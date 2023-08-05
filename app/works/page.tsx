"use client";
// icons
import { FaReact, FaSass } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { SiTypescript, SiVite, SiThemoviedatabase } from "react-icons/si";

// framer motion
import { motion } from "framer-motion";

// components
import WorkCard from "@/components/WorkCard";

export default function Works() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="py-3"
        >
            <h4 className="text-center text-[#fff700] font-medium text-2xl mb-3">
                Get To Know
            </h4>
            <h1 className="text-center font-bold text-4xl relative title md:text-5xl">
                My works
            </h1>

            <div className="flex flex-col items-center justify-center gap-8 pt-12 pb-20 md:flex-row md:flex-wrap">
                <WorkCard
                    img="/portfolio7.png"
                    projectType="Personal Project"
                    projectName="Youtube Clone"
                    icon1={<FaReact size={23} />}
                    icon2={<TbBrandNextjs size={23} />}
                    icon3={<BiLogoTailwindCss size={23} />}
                    icon4={<TbApi size={23} />}
                    liveLink="https://youtube-clone-swart-zeta.vercel.app/"
                    codeLink="https://github.com/ibrag1moff/youtube-clone"
                />
                <WorkCard
                    img="/portfolio1.png"
                    projectType="Ecommerce"
                    projectName="FATIMA"
                    icon1={<FaReact size={23} />}
                    icon2={<TbBrandNextjs size={23} />}
                    icon3={<BiLogoTypescript size={23} />}
                    icon4={<BiLogoTailwindCss size={23} />}
                    liveLink="https://fatima-ecommerce-ruby.vercel.app/"
                    codeLink="https://github.com/ibrag1moff/ecommerce-next"
                />
                <WorkCard
                    img="/portfolio5.png"
                    projectType="Personal Project"
                    projectName="Movie App"
                    icon1={<FaReact size={23} />}
                    icon2={<TbBrandNextjs size={23} />}
                    icon3={<SiTypescript size={23} />}
                    icon4={<BiLogoTailwindCss size={23} />}
                    icon5={<SiThemoviedatabase size={23} />}
                    liveLink="https://movie-app-ibragimoff.vercel.app/"
                    codeLink="https://github.com/ibrag1moff/movie-app"
                />
                <WorkCard
                    img="/portfolio3.png"
                    projectType="Personal Project"
                    projectName="GameStore"
                    icon1={<FaReact size={23} />}
                    icon2={<TbBrandNextjs size={23} />}
                    icon3={<BiLogoTypescript size={23} />}
                    icon4={<BiLogoTailwindCss size={23} />}
                    liveLink="https://gamestore-next.vercel.app/"
                    codeLink="https://github.com/ibrag1moff/gamestore-next"
                />
                <WorkCard
                    img="/portfolio6.png"
                    projectType="Personal Project"
                    projectName="Weather App"
                    icon1={<FaReact size={23} />}
                    icon2={<TbBrandNextjs size={23} />}
                    icon3={<BiLogoTailwindCss size={23} />}
                    icon4={<TbApi size={23} />}
                    liveLink="https://weather-app-rust-one-10.vercel.app/"
                    codeLink="https://github.com/ibrag1moff/weather-app"
                />
                <WorkCard
                    img="/portfolio4.png"
                    projectType="Figma Project"
                    projectName="Trafalgar"
                    icon1={<FaReact size={23} />}
                    icon2={<TbBrandNextjs size={23} />}
                    icon3={<BiLogoTailwindCss size={23} />}
                    liveLink="https://trafalgar-next.vercel.app/"
                    codeLink="https://github.com/ibrag1moff/trafalgar-next"
                />
                <WorkCard
                    img="/portfolio2.png"
                    projectType="Figma Project"
                    projectName="JayJay Portfolio"
                    icon1={<FaReact size={23} />}
                    icon2={<SiVite size={23} />}
                    icon3={<BiLogoTypescript size={23} />}
                    icon4={<FaSass size={23} />}
                    liveLink="https://ibrag1moff.github.io/jayjay-react-portfolio/"
                    codeLink="https://github.com/ibrag1moff/jayjay-react-portfolio"
                />
            </div>
        </motion.div>
    );
}
