"use client";
// react
import { ReactNode } from "react";

// dark mode
import { ThemeProvider } from "next-themes";

// router
import { usePathname } from "next/navigation";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

// components
import Nav from "./Nav";
import Header from "./Header";
import Transition from "./Transition";

type ProvidersProps = {
    children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div className="h-full">
                <Transition key={pathname} />
                <ThemeProvider enableSystem={true} attribute="class">
                    <Header />
                    <Nav />
                    {children}
                </ThemeProvider>
            </motion.div>
        </AnimatePresence>
    );
}
