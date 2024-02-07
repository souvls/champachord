
export default function ListSongRequest() {
    return (
        <>
            <div className='pt-16 pb-20'>
                <div className="">
                    <div data-aos="fade-up" className="container p-3 max-w-screen-lg m-auto lg:p-0">
                        <div className="text-center">
                            <p className="p-3">ເຈົ້າຂໍມາ ພວກເຮົາຈັດໃຫ້ !!!</p>
                            <h1 className="text-3xl lg:text-5xl font-bold">ລາຍການເພງທີ່ຖືກຂໍ</h1>
                            <p className="p-6">ພວກເຮົາກຳລັງພະຍາຍາມ ເພີ່ມເພງທີ່ທຸກຄົນຂໍເຂົ້າມາໃຫ້ໄດ້ໄວທີ່ສຸດ.</p>
                        </div>
                    </div>
                </div>
                <div className="container p-3 max-w-screen-lg m-auto lg:p-0">
                    <div data-aos="fade-up" className="mt-2 lg:mt-2 p-10 border border-sky-500 bg-sky-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />
                        <Request stt={"1"} name={"ນັ່ງກອດກົກເປົ້າ"} singer={"ສາວພອນ"} />

                    </div>
                </div>
            </div>
        </>
    )
}
const Request = ({ stt, name, singer }) => {
    return (
        <>
            <div className="p-2">
                <span className="">{stt}.</span>
                <span className="">{name}</span>
                <span className="">-{singer}</span>

            </div>
        </>
    )
}