"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import champachordLogo from "../assets/logo/champachord.svg"

const navLinks = [
    { name: "ໜ້າຫຼັກ", href: "/" },
    { name: "ຂໍເພງ", href: "/reqsong" },
    { name: "ຂ່າວສານ", href: "/news" },
    { name: "ກ່ຽວກັບເຮົາ", href: "/contact" },
]
const ctaegoryList = [
    { name: "ຄອດງ່າຍໆ", href: "/category/id" },
    { name: "ລູກທົ່ງ", href: "/category/id" },
    { name: "ໝໍລຳ", href: "/category/id" },
    { name: "ເພງເກົ່າ", href: "/" },
    { name: "ສະຕຣິງ", href: "/" },
    { name: "ຣ໋ອກ", href: "/" },
    { name: "ຣ໋ອກ", href: "/" },
    { name: "ຣ໋ອກ", href: "/" },

]
export default function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <div className="container p-3 max-w-screen-lg m-auto lg:p-0">
                <nav className="lg:grid grid-cols-3">
                    <div className="p-3">
                        <Link href="/" className="flex justify-center lg:justify-start items-center">
                            <Image
                                alt="logoBrand"
                                src={champachordLogo}
                                width={40}
                            />
                            <span className="lg:text-2xl font-bold">ຈຳປາ ຄອດເພງລາວ</span>
                        </Link>
                    </div>
                    <div className="flex justify-around items-center lg:text-lg">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href ? true : false;
                            return (
                                <Link href={link.href} key={link.name}
                                    className={"flex items-center hover:opacity-70" + (isActive ? " border-b-2" : "")}>
                                    {link.name}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="hidden lg:flex justify-end items-center">
                        <Link href="/login" className="w-28 h-10  flex justify-center items-center border border-sky-500 rounded hover:bg-sky-200">ເຂົ້າສູ່ລະບົບ</Link>
                    </div>
                </nav>
            </div>
            <div className="w-full bg-black text-white">
                <div className="py-4 flex justify-center flex-wrap lg:text-lg">
                    {ctaegoryList.map((category) => {
                        return (
                            <Link href={category.href} className="px-4 hover:opacity-70">
                                {category.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>

    )
}