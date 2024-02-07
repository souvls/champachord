"use client"
import {React,useEffect} from 'react';
import Search from '@/components/Search';
import TopRating from '@/components/TopRating';
import NewSong from '@/components/NewSong';
import ListSongRequest from '@/components/ListSongRequest';
import Advertisement from '@/components/Advertisement';
import champachordLogo from "../assets/logo/champachord.svg"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from "next/image"
export default function Home() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <div className="flex items-center bg-[url('../assets/bg_img/sm-bg1.jpg')] lg:bg-[url('../assets/bg_img/lg-bg1.jpg')] bg-cover bg-no-repeat min-h-screen">
        <div className="container p-4 max-w-screen-lg m-auto lg:p-0">
          <div className=''>
            <div className='flex justify-center items-center'>
              <div>
                <Image alt='champachord logo' width={100} src={champachordLogo} />
              </div>
              <div>
                <p className='ps-3 pt-3 text-2xl lg:text-3xl text-white font-black'>ຈຳປາ Chord</p>
                <h1 className='ps-3 pt-3 text-3xl lg:text-5xl text-white font-black'>ຍິນດີຕ້ອນຮັບ</h1>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <Search />
          </div>
          <div className='text-center pt-28'>
            <p className='text-white lg:text-lg'>ເວັບໄຊຣ໌ ລວບລວມເພງລາວ ຈາກທຸກແຫ່ງຫົນ,ທຸກຍຸກສະໄໝ ນຳມາສະແດງຄອດເພງ ພ້ອມສາມາດປັບເພີ່ມລົດຄີໄດ້ຕາມໃຈ.</p>
          </div>
        </div>
      </div>
      <div>
        <TopRating />
        <NewSong />
        <div className='bg-black text-white'>
          <Advertisement />
        </div>
        <ListSongRequest />
      </div>
    </>

  );
}
