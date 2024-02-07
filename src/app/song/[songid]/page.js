"use client";
import '../song.css'
import { IoIosMusicalNote } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GiMusicalScore } from "react-icons/gi";
const data = {
    songName: "ຫຼົງຮັກເມຍເຂົາ",
    singer: "ຈິມມີ້ ສິດທິພົນ",
    composer: "ຈິມມີ້ ສິດທິພົນ",
    lyrics: `<div>intro <span>6</span> | <span>6</span> | <span>2</span> <span>6</span>  </div>
            <div><span>6</span> | <span>6</span> | <span>6</span> | <span>6</span>  </div>
            <div><span>6</span> | <span>5</span><span>1</span> | <span>6</span> <span>1</span> | <span>1</span> </div>            
            <p class="song show-chords">ຫຼົງຮັກງາມ<span>6</span>ງອນ ເຖິງຮູ້ມາ<span>5</span>ກ່ອນວ່າເຈົ້າມີ<span>1</span>ຜົວ</p>
            <p class="song show-chords">ປັກຈິດປັກ<span>2</span>ໃຈ ຮັກຈົນເມົາ<span>4</span>ມົວ ຄິດຢາກຖອນ<span>5</span>ຕົວຄືຊິບໍ່<span>3</span>ທັນ</p>
            <p class="song show-chords">ຜູ້ສາວມີ<span>6</span>ຜົວ ຫຼຽວເບິ່ງມຸມໃດກໍສວຍລາ<span>2</span>ວັນ</p>
            <p class="song show-chords">ຫົວໃຈສະ<span>5</span>ເທືອນແຂນຂາຈົນ<span>1</span>ສັ່ນ ເມື່ອ<span>5</span>ແຈ່ມຈັນສົ່ງສາຍຕາ<span>3</span>ມາ</p>`,
    categories: "ລູກທົ່ງ",
    style: "",
    key: "major",
    tone: 4,
    link: `https://www.youtube.com/watch?v=Lr1VEAgcUmM&t=2s`,
    sttaus: true
}



export default function SongId({ params }) {
    //lint youtube to id
    const videoId = data.link.match(/v=([^\&]+)/)[1];
    var toneNum = data.tone;
    var toneString = getKeyString(data.key, toneNum);
    var capo = 0;
    var lyrics = swapLyrics(data.key, toneNum, data.lyrics)

    const upTone = () => {
        if(toneNum < 11){
            toneNum = toneNum+1;
        }else{
            toneNum = 0;
        }
        toneString = getKeyString(data.key, toneNum);
        console.log(toneNum)
        console.log(toneString)
    }
    const downTone = () => {
        if(toneNum > 0){
            toneNum = toneNum-1;
        }else{
            toneNum = 11;
        }
        toneString = getKeyString(data.key, toneNum);
        console.log(toneNum)
        console.log(toneString)
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
                        <span className='border-2 py-3 px-5 text-center'>{toneString}</span>
                        <button onClick={upTone} className='bg-sky-500 text-white py-3 px-6 rounded-lg mx-5'>+</button>
                    </div>
                    <p className='text-center pt-2'>{capo == 0 ? 'ຄີຕົ້ນສະບັບ' : "capo: " + capo}</p>
                </div>
                {/* <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Lr1VEAgcUmM?si=RboZHnG2Bn12cDbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div> */}
            </div>
            <div className="container p-4 m-auto">
                <div className='mt-10'>
                    <div dangerouslySetInnerHTML={{ __html: lyrics }}></div>
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
    if (key === "major") {
        chord = getMajorKey(tone);
    } else {
        chord = getMajorKey(tone);
    }
    return chord.key;
}

function swapLyrics(key, tone, lyrics) {

    //get chord group
    var chord = [];
    if (key === "major") {
        chord = getMajorKey(tone);
    } else {
        chord = getMajorKey(tone);
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

