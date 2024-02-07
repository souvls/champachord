"use client";
import '../song.css'
import Advertisment from '@/components/Advertisement';
import TopRating from '@/components/TopRating';
import { IoIosMusicalNote } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GiMusicalScore } from "react-icons/gi";
import { useEffect, useState } from 'react';
const data = {
    songName: "ຫຼົງຮັກເມຍເຂົາ",
    singer: "ຈິມມີ້ ສິດທິພົນ",
    composer: "ຈິມມີ້ ສິດທິພົນ",
    lyrics: `<div>intro <span>6</span> | <span>6</span> | <span>2</span> <span>6</span>  </div>
            <div><span>6</span> | <span>6</span> | <span>6</span> | <span>6</span>  </div>
            <div><span>6</span> | <span>5</span> | <span>1</span> | <span>6</span> <span>1</span> | <span>1</span> </div>            
            <p class="song show-chords">ຫຼົງຮັກງາມ<span>6</span>ງອນ ເຖິງຮູ້ມາ<span>5</span>ກ່ອນວ່າເຈົ້າມີ<span>1</span>ຜົວ</p>
            <p class="song show-chords">ປັກຈິດປັກ<span>2</span>ໃຈ ຮັກຈົນເມົາ<span>4</span>ມົວ ຄິດຢາກຖອນ<span>5</span>ຕົວຄືຊິບໍ່<span>3</span>ທັນ</p>
            <p class="song show-chords">ຜູ້ສາວມີ<span>6</span>ຜົວ ຫຼຽວເບິ່ງມຸມໃດກໍສວຍລາ<span>2</span>ວັນ</p>
            <p class="song show-chords">ຫົວໃຈສະ<span>5</span>ເທືອນແຂນຂາຈົນ<span>1</span>ສັ່ນ ເມື່ອ<span>5</span>ແຈ່ມຈັນສົ່ງສາຍຕາ<span>3</span>ມາ</p>
            <p class="song show-chords">ຢາກເຂົ້າໄປ<span>6</span>ຫາ ຢ້ານຄົນເຂົາ<span>5</span>ດ່າວ່າເຮົາມັນ<span>6</span>ຊົ່ວ</p>
            <p class="song show-chords">ຢ້ານຖືກລູກ<span>5</span>ປຶນຂອງຜູ້ເປັນ<span>4</span>ຜົວ ບໍ່ກ້າເຮັດ<span>5</span>ຊົ່ວຄືເຮັດເອົາ<span>3</span>ໄວ້</p>
            <p class="song show-chords">ຮັກບໍ່ກ້າ<span>1</span>ບອກ ໄດ້ແຕ່ເກັບ<span>6</span>ຂັງເອົາໄວ້ໃນ<span>2</span>ໃຈ</p>
            <p class="song show-chords">ກົດໝາຍວາງ<span>5</span>ອອກບໍ່ມີຂໍ້<span>1</span>ໃດ ເປັນຊູ້ທາງ<span>5</span>ໃຈບໍ່ຜິດດອກ1ໜາ</p>
            <p class="song show-chords">*ຫຼົງຮັກເມຍ<span>4</span>ເຂົາ ຄັນ<span>5</span>ເວົ້າກະຢ້ານຄົນ<span>6</span>ໄດ້ຍິນ</p>
            <p class="song show-chords">ຈຳຕ້ອງກຶນ<span>4</span>ກິນ ກ້ອນຄວາມ<span>5</span>ເຫງົາບາດຍາມຄິດ<span>3</span>ຮອດ</p>
            <p class="song show-chords">ຄິດໄວ້ໃນ<span>1</span>ໃຈ ຍາມຜິດກັບ<span>6</span>ຜົວຢາກເຂົ້າໄປ<span>1</span>ປອບ</p>
            <p class="song show-chords">ໄດ້ແຕ່ຄິດຊື່ໆນັ້ນ<span>6</span>ດອກ ບໍ່ກ້າ<span>6</span>ສ່ຽງຢ້ານປີນຕົ້ນ<span>3</span>ງິ້ວ......<span>6</span></p>
`,
    categories: "ລູກທົ່ງ",
    style: "",
    tone: "major",
    key: 4,
    link: `https://www.youtube.com/watch?v=Lr1VEAgcUmM&t=2s`,
    sttaus: true
}
//lint youtube to id
const videoId = data.link.match(/v=([^\&]+)/)[1];



export default function SongId({ params }) {
    const [keyNum, setKeyNum] = useState();
    const [keyString, setKeyString] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [capo, setCapo] = useState(0);

    useEffect(() => {
        setKeyNum(data.key);
        setKeyString(getKeyString(data.key))
        setLyrics(swapLyrics(data.key, data.tone, data.lyrics));
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
        setKeyString(getKeyString(x));

        //change capo
        var y = capo;
        if (y < -1) {
            y = 9;

        } else {
            y = y - 1;
        }
        setCapo(y);
        //change lyrics
        setLyrics(swapLyrics(x, data.tone, data.lyrics));
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
        setLyrics(swapLyrics(x, data.tone, data.lyrics));

    }
    return (

        <div className='bg-gray-200'>
            <div className="container p-4 max-w-screen-lg m-auto lg:p-0">
                <p className='py-4'><a href='/'>ໜ້າຫຼັກ</a> &gt;&gt; ຄອດເພງ {data.songName} </p>

                <div class="p-5 bg-white shadow-md grid grid-cols-1 lg:grid-cols-2 gap-4 rounded">
                    <div className='flex justify-center items-center'>
                        <img alt='coverpage' src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`} width={"100%"} />
                    </div>
                    <div className='m-auto py-2 lg:py-10 lg:m-0'>
                        <p className='text-xl font-bold py-4'>ເພງ: {data.songName}</p>
                        <p className='flex justify-start items-center pb-2'><FaUser /> &ensp;  ນັກຮ້ອງ: {data.singer}</p>
                        <p className='flex justify-start items-center pb-2'><IoIosMusicalNote />&ensp;  ແນວເພງ: {data.categories}</p>
                        <p className='flex justify-start items-center pb-2'><GiMusicalScore /> &ensp; ຄີເພງ: {getKeyString(data.key, data.tone)}</p>
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
                {/* <div className='hidden md:block lg:block'>
                    <div class="mt-5 p-5 bg-white shadow-md rounded">
                        <div className='flex justify-center items-center'>
                            <div>
                                <p className='text-center'>ຈຳນວນແຖວ</p>
                                <button className='p-3 m-3 text-white shadow-md rounded active:bg-green-500'>1ແຖວ</button>
                                <button className='p-3 m-3 text-white bg-green-500 shadow-md rounded'>4ແຖວ</button>
                            </div>
                            <div>
                                <p className='text-center'>ຂະໜາດໜັງສື</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div class="p-5 bg-white shadow-md rounded text-center">
                    <div dangerouslySetInnerHTML={{ __html: lyrics }}></div>
                </div>
                <Advertisment />
                <div class="p-5 bg-white shadow-md rounded text-center flex justify-center items-center ">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Lr1VEAgcUmM?si=RboZHnG2Bn12cDbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="p-5 bg-white shadow-md rounded text-center">
                    <TopRating />
                </div>

            </div>

        </div>
    )
}

// const url = 'https://www.youtube.com/watch?v=1sIWez9HAbA';

// const videoId = url.match(/v=([^\&]+)/)[1];

// console.log(videoId); // '1sIWez9HAbA'


const getKeyString = (key, tone) => {
    var chord = [];
    if (tone === "major") {
        chord = getMajorKey(key);
    } else {
        chord = getMajorKey(key);
    }
    return chord.key;
}

function swapLyrics(key, tone, lyrics) {

    //get chord group
    var chord = [];
    if (tone === "major") {
        chord = getMajorKey(key);
    } else {
        chord = getMajorKey(key);
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
    ]
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
    ]
}

