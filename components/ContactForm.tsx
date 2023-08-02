// react
import React, { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// framer motion
import { motion } from "framer-motion";

export default function ContactForm() {
    const [alert, setAlert] = useState<string>("");
    const [fullName, setFullName] = useState("");
    const [msg, setMsg] = useState("");
    const [email, setEmail] = useState("");
    const form = useRef<any>();

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_7jy778c",
                "template_ad2c32i",
                form.current,
                "yWah86NypoGp2mBpk"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setAlert(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setFullName("");
        setMsg("");
        setEmail("");
    };

    useEffect(() => {
        setTimeout(() => {
            setAlert("");
        }, 4000);
    }, [msg]);

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center text-center"
        >
            <div
                className={
                    alert === "OK"
                        ? "absolute left-1/2 top-1/2 translate-x-[-50%] block transition-all duration-300 translate-y-[-50%] bg-green-600 w-[260px] xs:w-[320px] lg:w-[420px] rounded-full p-2 xs:p-4"
                        : "hidden"
                }
            >
                <h1 className="flex items-center justify-center font-bold text-md leading-5 xs:text-xl xs:leading-6">
                    Your message has been successfully sent!
                </h1>
            </div>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4  items-center md:items-end"
            >
                <h1 className="text-[23px] sm:text-4xl  max-w-[180px] sm:max-w-[100%] md:text-5xl font-bold md:leading-[65px]">
                    My name is
                    <input
                        className="outline-none bg-transparent text-center sm:text-left  focus:bg-white/10 transition-all duration-75 w-[150px] md:w-[250px] border-b-2 uppercase font-medium border-white/40 placeholder:uppercase text-sm md:text-2xl mx-2"
                        type="text"
                        name="user_name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="your full name"
                        required
                    />
                    and i <br />
                    have
                    <input
                        className="outline-none bg-transparent text-center sm:text-left focus:bg-white/10 transition-all duration-75   w-[150px] sm:w-[250px] md:w-[400px] border-b-2 uppercase font-medium border-white/40  placeholder:uppercase text-sm md:text-2xl mx-2"
                        type="text"
                        name="message"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder="a company, website, project"
                        required
                    />
                    that
                    <br /> needs help.You can reach me at
                    <br />
                    <input
                        className="outline-none bg-transparent text-center sm:text-left focus:bg-white/10 transition-all duration-75 w-[180px]  border-b-2 font-medium sm:w-[200px]  md:w-[300px] border-white/40  placeholder:uppercase text-sm md:text-2xl mx-2"
                        type="email"
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your email address"
                        required
                    />
                    to get things started.
                </h1>
                <button
                    onSubmit={sendEmail}
                    className="bg-[#fff700] py-2 px-8 font-bold mb-16 sm:mb-20 rounded text-black uppercase hover:bg-[#fff700cf] transition-all duration-200"
                >
                    send
                </button>
            </form>
        </motion.div>
    );
}
