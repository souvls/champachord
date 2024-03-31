
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "../../components/AdminComponets/SideBar"
import { api_url } from '../../api/apiconfig'
import axios from "axios";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        absolute: "admin - Champa Chord",
        default: "admin-Champa Chord",
        template: "%s | Champa chord"
    },
    description: "",
    keywords: "",
    robots: "index,follow",
    authors: { name: "soulixai, hàn quốc trung, mondev" },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;

}>) {
    
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex w-full h-screen">
                    <SideBar />
                    <div className="w-full h-screen p-5">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
