import Image from "next/image"
import Search from "@/components/Search" ;
import champachordLogo from "@/assets/logo/champachord.svg"
import ShowSongCategory from "@/components/ShowSongCategory"
import TopRating from "@/components/TopRating";
export default function ShowByCategiry() {
    return (
        <>
            <div className="flex items-center bg-[url('../assets/bg_img/bg-3.jpg')]  bg-cover bg-no-repeat min-h-screen">
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
            <ShowSongCategory/>
            <TopRating/>
            
        </>
    )
}