"use client";

// react
import { useState } from "react";

// icons
import { FaEdit, FaNodeJs } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { BiSolidEditAlt } from "react-icons/bi";

// framer motion
import { motion } from "framer-motion";

// components
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
    const text =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure excepturi assumenda architecto blanditiis? Reprehenderit debitis quaerat aliquam cupiditate similique velit, consectetur possimus iusto laboriosam modi molestiae doloribus dolores facere earum distinctio? Illo aperiam modi expedita magnam, porro voluptas ex sunt unde ipsum est delectus veniam error quaerat qui quis sit impedit possimus accusamus molestias iusto necessitatibus tenetur laborum culpa.Commodi!";
    const services = [
        {
            icon: <FaNodeJs size={50} />,
            title: "Backend",
            info: "A back-end developer is a type of software developer who specializes in storing and securely manipulating user data.",
        },
        {
            icon: <PiBracketsCurlyBold size={50} />,
            title: "Frontend",
            info: "A front-end developer is a type of software developer who specializes in creating and designing the user interface.",
        },
        {
            icon: <BiSolidEditAlt size={50} />,
            title: "UI/UX Design",
            info: "UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product.",
        },
    ];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="py-3"
        >
            <div className="flex flex-col items-center gap-16">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-col items-center justify-center"
                >
                    <h4 className="text-center text-[#fff700] font-medium text-2xl mb-3">
                        Services
                    </h4>
                    <h1 className="text-center font-bold text-4xl relative  title md:text-5xl">
                        What I Do
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ y: "10%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "10%" }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-col gap-8 md:flex-row md:flex-wrap md:items-center md:justify-center pb-12"
                >
                    {services.map((service, i) => {
                        return <ServiceCard key={i} {...service} />;
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
}
