import Link from "next/link";
import Image from "next/image";
import champachordLogo from "../assets/logo/champachord.svg";

export default function Footer() {
    return (
        <>
            <div className="bg-gray-500 pt-20 pb-10">
                <div className="container p-3 max-w-screen-lg m-auto lg:p-0">
                    <div className="grid grid-cols-1 lg:flex justify-around items-center">
                        <div className="pb-6 border-b-2 lg:p-0 lg:pe-10 lg:border-e-2 lg:border-b-0">
                            <p className="text-white">ຫາກພົບບັນຫາເວລາໃຊ້ເວັບເຮົາ ທ່ານສາມາດລາຍງານບັນຫາດ້ານລຸ່ມນີ້:</p>
                            <form>
                                <div className="mt-4">
                                    <input type="text" className="w-1/2 text-white bg-gray-500 outline-none border-b-2" placeholder="ອິເມວ" />
                                </div>
                                <div className="mt-4">
                                    <textarea rows={3} className="w-1/2 text-white bg-gray-500 outline-none border-b-2" placeholder="ບັນຫາ"/>
                                </div>
                                <div className="mt-4">
                                    <button className="p-4 border border-sky-500 rounded text-white hover:bg-sky-200">ລາຍງານ</button>
                                </div>
                            </form>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center pt-6 lg:p-0">
                                <Image alt="logo" src={champachordLogo} width={50} />
                            </div>
                            <p className="text-white">Champa chord - ຈຳປາ ຄອດ</p>
                            <p className="text-white">Copyright ©2024 All rights champachord</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black p-2 text-white text-center">
                <p>thank you for use my product</p>
            </div>
        </>
    )
}