"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import champachordLogo from "../assets/logo/champachord.svg"

const navLinks = [
    {id:1, name: "ໜ້າຫຼັກ", href: "/" },
    {id:2, name: "ຂໍເພງ", href: "/reqsong" },
    {id:3, name: "ຂ່າວສານ", href: "/news" },
    {id:4, name: "ກ່ຽວກັບເຮົາ", href: "/contact" },
]
const ctaegoryList = [
    // {id:2, name: "ລູກທົ່ງ", href: "/category/id" },
    {id:3, name: "ໝໍລຳ", href: "/" },
    {id:5, name: "ສະຕຣິງ", href: "/" },
    {id:6, name: "ລູກທົ່ງ", href: "/" },

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
                                <Link key={link.id} href={link.href}
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
            
            {/* <div className="w-full bg-black text-white">
                <div className="py-4 flex justify-center flex-wrap lg:text-lg">
                    {ctaegoryList.map((category) => {
                        return (
                            <Link key={category.id} href={category.href} className="px-4 hover:opacity-70">
                                {category.name}
                            </Link>
                        )
                    })}
                </div>
            </div> */}
        </>

    )
}