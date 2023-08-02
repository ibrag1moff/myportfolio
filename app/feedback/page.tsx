"use client";
// framer motion
import { motion } from "framer-motion";

// components
import ContactForm from "@/components/ContactForm";

export default function Feedback() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="py-3"
        >
            <h4 className="text-center text-[#fff700] font-medium text-2xl mb-3">
                FeedBack
            </h4>
            <h1 className="text-center font-bold text-4xl relative mb-8 title md:text-5xl">
                Contact me
            </h1>
            <ContactForm />
        </motion.div>
    );
}
