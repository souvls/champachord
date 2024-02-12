import Imgsong from '@/assets/singer/jimmy.png'
import Image from 'next/image'
import Link from 'next/link'
export default function ShowSongCGR() {
    

    return (
        <div className='pt-16 pb-20'>
            <div data-aos="fade-up" className="container p-3 max-w-screen-lg m-auto lg:p-0">
                <div className="text-center">
                    <p className="p-3">ເພງ ລູກທົ່ງຍອດນິຍົມ</p>
                    <h1 className="text-3xl lg:text-5xl font-bold">ເພງຍອດຮິດ</h1>
                    <p className="p-6">ເພງຍອດຮິດ ທີ່ກຳລັງເປັນກະແສຈາກ Youtube, tiktok,... ພວກເຮົາຍົກມາໃຫ້ເຈົ້າແລ້ວທີ່ນີ້.</p>
                </div>
                <div data-aos="fade-up" className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                    <Song id={12345} title={"ໃສວ່າຊັງເຂົາ"} singer={"ຈິມມີ້ ສິດທິພົນ"} imgsong={Imgsong} />
                </div>
            </div>

        </div>
    )
}

const Song = ({ id, title, singer, imgsong }) => {
    return (
        <>
            <Link href={"/song/" + id} className='grid grid-rows text-center hover:border-2 rounded'>
                <div className=''>
                    <Image alt='cover song' src={Imgsong} />
                </div>
                <div className='bg-sky-100'>
                    <p className='pt-3 font-bold lg:text-xl'>{title}</p>
                    <p className='pb-2'>{singer}</p>
                </div>
            </Link>
        </>
    )
}