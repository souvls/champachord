import Link from "next/link";

export default function Advertisment() {
    return (
        <>
            <div className='py-10'>
                <div className="container p-3 max-w-screen-lg m-auto lg:p-0">
                    <div className="text-center">
                        <p className="p-3">ADVERTISMENT</p>
                    </div>
                    <div className="bg-gray-200 w-1/2 m-auto text-center p-6 text-black">
                        ໂຄສະນາ<Link href="/contact" className="text-sky-400">ຕິດຕໍ່</Link>
                    </div>
                </div>
            </div>
        </>
    )
}