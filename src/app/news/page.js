"use client";
import Image from "next/image"
import ListSongRequest from "@/components/ListSongRequest";
import Advertisment from "@/components/Advertisement";
import { useState } from "react";
import logo from "../../assets/logo/champachord.svg"


export default function News() {
    return (
        <>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="container p-4 max-w-screen-lg m-auto lg:p-0">
                <div className="pb-4">
                    <div className="text-center p-4 text-white font-bold text-xl">
                        <h1>ຂ່າວສານການເຄື່ອນໄຫວຂອງພວກເຮົາ</h1>
                    </div>
                    <div className="pt-4 grid grid-cols-1 gap-4">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Advertisment/>
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        </div>
        <ListSongRequest/>
        </>
    )
}
const Item = () => {
    return (
        <>
            <div className="grid grid-cols-3 bg-white p-4 rounded">
                <div className="flex justify-end border-e-4 border-indigo-500/100 p-4">
                    <Image alt="" src={logo} width={100} />
                </div>
                <div className="col-span-2 ps-3 flex items-center">
                    <div>
                        <h1 className="font-bold">ເລີ່ມສ້າງເວັບຈຳປາຄອດ</h1>
                        <p>ໃນວັນທີ 01/02/2024 ໄດ້ເລີ່ມຂຽນໂຄດ ເວັບຄອດເພງ ຈຳປາຄອດ.</p>
                    </div>
                </div>
            </div>
        </>
    )

}