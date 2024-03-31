
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"ຈຳປາຄອດເພງ - Champa Chord",
    template:"%s | Champa chord"
  },
  description: "ເວັບໄຊຣ໌ ລວບລວມເພງລາວ ຈາກທຸກແຫ່ງຫົນ,ທຸກຍຸກສະໄໝ ນຳມາສະແດງຄອດເພງ ພ້ອມສາມາດປັບເພີ່ມລົດຄີໄດ້ຕາມໃຈ.",
  keywords: "lao song chord, คอร์ดเพลงลาว, ຄອດເພງລາວ",
  robots: "index,follow",
  authors: {name:"soulixai, hàn quốc trung, mondev"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
