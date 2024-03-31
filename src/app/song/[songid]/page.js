"use client";
import '../song.css'
import Advertisment from '@/components/Advertisement';
import TopRating from '@/components/TopRating';
import Search from '@/components/Search';
import { IoIosMusicalNote } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { api_url } from '@/api/apiconfig';


export default function SongId({ params }) {
    const [song, setSong] = useState([]);
    const [keyNum, setKeyNum] = useState();
    const [keyString, setKeyString] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [capo, setCapo] = useState(0);
    const [videoId, setVideoId] = useState("");
    const [loading, setLaoding] = useState(false);


    useEffect(() => {
        setLaoding(true);
        const getData = async () => {
            const query = await fetch(api_url + "/api/song/" + params.songid);
            const response = await query.json();
            if (response) {
                setSong(response);
                setKeyNum(response.key)
                setVideoId(response.youtube_link.match(/v=([^\&]+)/)[1]);
                setKeyString(getKeyString(response.key,response.tone));
                setLyrics(swapLyrics(response.key,response.tone,response.lyrics));
            }
        }
        getData();
        setLaoding(false);
    }, [])

    const upTone = () => {
        //change key _______________
        var x = keyNum;
        if (x < 11) {
            x = x + 1;
        } else {
            x = 0;
        }
        setKeyNum(x);
        setKeyString(getKeyString(x,song.tone));

        //change capo
        var y = capo;
        if (y < -1) {
            y = 9;

        } else {
            y = y - 1;
        }
        setCapo(y);
        //change lyrics
        setLyrics(swapLyrics(x, song.tone, song.lyrics));
    }
    const downTone = () => {
        //change key _______________
        var x = keyNum;
        if (x > 0) {
            x = x - 1;
        } else {
            x = 11;
        }

        setKeyNum(x);
        setKeyString(getKeyString(x));

        //change capo
        var y = capo;
        if (y > 8) {
            y = -2;

        } else {
            y = y + 1;
        }
        setCapo(y);
        //change lyrics
        setLyrics(swapLyrics(x, song.tone, song.lyrics));

    }
    return (
        <div className='bg-gray-200'>
            {loading ? <div className="container max-w-screen-lg m-auto lg:p-0">loading...</div> :
                <div className="container max-w-screen-lg m-auto lg:p-0">
                    <p className='px-2 lg:px-0 py-4'><a href='/'>ໜ້າຫຼັກ</a> &gt;&gt; ຄອດເພງ {song.song_name} </p>
                    <div className='p-4'>
                        <Search />
                    </div>
                    <div class="mt-4 p-5 bg-white shadow-md grid grid-cols-1 lg:grid-cols-2 gap-4 rounded">
                        <div className='flex justify-center items-center'>
                            <img alt='coverpage' src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`} width={"100%"} />
                        </div>
                        <div className='m-auto py-2 lg:py-10 lg:m-0'>
                            <p className='text-xl font-bold py-4'>ເພງ: {song.song_name}</p>
                            <p className='flex justify-start items-center pb-2'><FaUser /> &ensp;  ນັກຮ້ອງ: {song.singers}</p>
                            <p className='flex justify-start items-center pb-2'><IoIosMusicalNote />&ensp;  ແນວເພງ: {song.categories && song.categories.name}</p>
                        </div>
                    </div>

                    <div class="mt-5 p-5 bg-white shadow-md rounded">
                        <p className='text-center pb-2 font-bold'>ປັບຄີເພງ</p>
                        <div className='w-full lg:w-1/3 m-auto grid grid-cols-3'>
                            <button onClick={downTone} className='bg-sky-500 text-white py-3 px-6 rounded-lg mx-5'>-</button>
                            <span className='border-2 py-3 px-5 text-center'>{keyString}</span>
                            <button onClick={upTone} className='bg-sky-500 text-white py-3 px-6 rounded-lg mx-5'>+</button>
                        </div>
                        <p className='text-center pt-2'>
                            {capo > 0 ? "capo ຫ້ອງທີ " + capo :
                                capo === 0 ? "ຄີີຕົ້ນສະບັບ" :
                                    capo === -1 ? "ຍານສາຍລົງ 1/2 ຫ້ອງສຽງ => Eb" :
                                        capo === -2 ? "ຍານສາຍລົງ 1 ຫ້ອງສຽງ => D" : ""}
                        </p>
                    </div>
                    <hr />

                    <div class="p-5 lg:p-5 bg-white shadow-md rounded text-center">
                        <div dangerouslySetInnerHTML={{ __html: lyrics }}></div>
                    </div>
                    <Advertisment />
                    <div class="p-5 bg-white shadow-md rounded text-center flex justify-center items-center ">
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?si=RboZHnG2Bn12cDbU`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <hr></hr>
                    <div class="p-5 bg-white shadow-md rounded text-center">
                        <TopRating />
                    </div>
                </div>
            }

        </div>
    )
}


const getKeyString = (key, tone) => {
    console.log(key)
    var chord = [];
    if (tone === "major") {
        chord = getMajorKey(key);
    } else {
        chord = getMinorKey(key);
    }
    return chord.key;
}

function swapLyrics(key, tone, lyrics) {

    //get chord group
    var chord = [];
    if (tone === "major") {
        chord = getMajorKey(key);
    } else {
        chord = getMinorKey(key);
    }
    //replace lyrics
    const x = lyrics.replace(/1/g, chord.I)
        .replace(/2/g, chord.II)
        .replace(/3/g, chord.III)
        .replace(/4/g, chord.IV)
        .replace(/5/g, chord.V)
        .replace(/6/g, chord.VI)
        .replace(/7/g, chord.VII)
    return x;

}
const getMajorKey = (key) => {
    const tableChord = [
        { key: "C", I: "C", II: "Dm", III: "Em", IV: "F", V: "G", VI: "Am", VII: "Bdim" },
        { key: "Db", I: "Db", II: "Ebm", III: "Fm", IV: "Gb", V: "Ab", VI: "Bbm", VII: "Cdim" },
        { key: "D", I: "D", II: "Em", III: "F#m", IV: "G", V: "A", VI: "Bm", VII: "C#dim" },
        { key: "Eb", I: "Eb", II: "Fm", III: "Gm", IV: "Ab", V: "Bb", VI: "Cm", VII: "Ddim" },
        { key: "E", I: "E", II: "F#m", III: "G#m", IV: "A", V: "B", VI: "C#m", VII: "D#dim" },
        { key: "F", I: "F", II: "Gm", III: "Am", IV: "Bb", V: "C", VI: "Dm", VII: "Edim" },
        { key: "F#", I: "F#", II: "G#m", III: "A#m", IV: "B", V: "C#", VI: "D#m", VII: "E#dim" },
        { key: "G", I: "G", II: "Am", III: "Bm", IV: "C", V: "D", VI: "Em", VII: "F#dim" },
        { key: "Ab", I: "Ab", II: "Bbm", III: "Cm", IV: "Db", V: "Eb", VI: "Fm", VII: "Gdim" },
        { key: "A", I: "A", II: "Bm", III: "C#m", IV: "D", V: "E", VI: "F#m", VII: "G#dim" },
        { key: "Bb", I: "Bb", II: "Cm", III: "Dm", IV: "Eb", V: "F", VI: "Gm", VII: "Adim" },
        { key: "B", I: "B", II: "C#m", III: "D#m", IV: "E", V: "F#", VI: "G#m", VII: "A#dim" }
    ];
    return tableChord[key];
}
const getMinorKey = (key) => {
    const tableChord = [
        { key: "Cm", I: "Cm", II: "Ddim", III: "Eb", IV: "Fm", V: "Gm", VI: "Ab", VII: "Bb" },
        { key: "C#m", I: "C#m", II: "D#", III: "E", IV: "F#m", V: "G#m", VI: "A", VII: "B" },
        { key: "Dm", I: "Dm", II: "Edim", III: "F", IV: "Gm", V: "Am", VI: "Bb", VII: "C" },
        { key: "D#m", I: "D#m", II: "E#", III: "F#", IV: "G#m", V: "A#m", VI: "B", VII: "C#" },
        { key: "Em", I: "Em", II: "F#dim", III: "G", IV: "Am", V: "Bm", VI: "C", VII: "D" },
        { key: "Fm", I: "Fm", II: "Gdim", III: "Ab", IV: "Bbm", V: "Cm", VI: "Db", VII: "Eb" },
        { key: "F#m", I: "F#m", II: "G#", III: "A", IV: "Bm", V: "C#m", VI: "D", VII: "E" },
        { key: "Gm", I: "Gm", II: "Adim", III: "Bb", IV: "Cm", V: "Dm", VI: "Eb", VII: "F" },
        { key: "G#m", I: "G#m", II: "A#", III: "B", IV: "C#m", V: "D#m", VI: "E", VII: "F#" },
        { key: "Am", I: "Am", II: "Bdim", III: "C", IV: "Dm", V: "Em", VI: "F", VII: "G" },
        { key: "Bbm", I: "Bbm", II: "Cdim", III: "Db", IV: "Ebm", V: "Fm", VI: "Gb", VII: "Ab" },
        { key: "Bm", I: "Bm", II: "C#dim", III: "D", IV: "Em", V: "F#m", VI: "G", VII: "A" },
    ];
    return tableChord[key];
}

