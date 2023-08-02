// next
import type { Metadata } from "next";
import "./globals.css";

// fonts
import { Outfit } from "next/font/google";

// components
import Providers from "@/components/Providers";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "abbas.dev",
    description: "Created by ibrag1moff",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${outfit.className} bg-gradient-to-r from-[#283048] to-[#475357] dark:bg-gradient-to-r dark:from-[#0f0c29] dark:to-[#1f1f39]`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
