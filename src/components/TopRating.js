"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { api_url } from '@/api/apiconfig';
export default function TopRating() {
    const [songRating, setSongRating] = useState([]);
    const [loading, setLaoding] = useState(false);

    useEffect(() => {
        setLaoding(true);
        const getData = async () => {
            const query = await fetch(api_url + "/api/song/rating");
            const response = await query.json();
            if (response) {
                setSongRating(response);
            }
        }
        getData();
        setLaoding(false);
    }, [])
    return (
        <div className='pt-16 pb-20'>
            <div data-aos="fade-up" className="container p-3 max-w-screen-lg m-auto lg:p-0">
                <div className="text-center">
                    <p className="p-3">ເຈົ້າບໍຮູ້ຊິຫຼິ້ນເພງຫຍັງແມ່ນບໍ່? ນີ້ເລີຍ</p>
                    <h1 className="text-3xl lg:text-5xl font-bold">ເພງຍອດຮິດ</h1>
                    <p className="p-6">ເພງຍອດຮິດ ທີ່ກຳລັງເປັນກະແສຈາກ Youtube, tiktok,... ພວກເຮົາຍົກມາໃຫ້ເຈົ້າແລ້ວທີ່ນີ້.</p>
                </div>
                <div data-aos="fade-up" className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {loading && <Loading/>}
                    {!loading && songRating.map((song, index) => {
                        return (
                            <Song key={index} id={song.song_id._id} title={song.song_id.song_name} singer={song.song_id.singers} imgsong={song.song_id.youtube_link} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

const Song = ({ id, title, singer, imgsong }) => {
    const link = imgsong.match(/v=([^\&]+)/)[1];
    return (
        <>
            <Link href={"/song/" + id} className='grid grid-rows text-center hover:border-2 rounded'>
                <div className=''>
                    <img alt='coverpage' src={`https://i.ytimg.com/vi/${link}/mqdefault.jpg`} width={"100%"}/>
                </div>
                <div className='bg-sky-100'>
                    <p className='pt-3 font-bold lg:text-xl'>{title}</p>
                    <p className='pb-2'>{singer}</p>
                </div>
            </Link>
        </>
    )
}