"use client";
import logo from '@/assets/logo/champachord.svg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import Advertisement from '@/components/Advertisement';

export default function contact() {
    return (
        <>
            <div>
                <div className="flex items-center bg-[url('../assets/bg_img/bg_2.jpg')] bg-cover bg-no-repeat">
                    <div className="container p-4 max-w-screen-lg m-auto lg:p-0">
                        <div className="my-10 p-4 bg-white">
                            <h1 className="text-center text-3xl p-6 font-bold">ຕິດຕໍ່ເຮົາ</h1>
                            <div className="grid grid-cols-1 lg:grid-cols-2 text-center">
                                <div className="text-center">
                                    <a className="text-xl p-4 flex justify-start items-center" href="https://maps.app.goo.gl/bJefvTbFRvmHbG1MA" target="_blank"><HiOutlineLocationMarker /> salavan,salavan,Laos</a>
                                    <a className="text-xl p-4 flex justify-start items-center" href="https://wa.me/+8562056388013" target="_blank"><FaWhatsapp /> 020 56 388 013</a>
                                    <a className="text-xl p-4 flex justify-start items-center" href="soulxai.vls@gmail.com" target="_blank"><MdOutlineMail /> soulxai.vls@gmail.com</a>
                                    <div className='flex justify-center py-4'>
                                        <Image alt='logo' src={logo} width={200}/>
                                    </div>
                                </div>
                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6459.351349780747!2d106.40244016719434!3d15.711240074951876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31154e20ba772b8b%3A0x914604b1a859559b!2z4Liq4Liy4Lil4Liw4Lin4Lix4LiZ!5e0!3m2!1sth!2sla!4v1707404081329!5m2!1sth!2sla" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <Advertisement/>
                        <div className="my-10 p-4 bg-white">
                            <p className="text-center text-green-500">ຮັບລົງໂຄສະນາ ຜ່ານເວັບໄຊ ຈຳປາຄອດ, ຮັບສ້າງເວັບໄຊ ແອັບພິເຄຊັ່ນ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}