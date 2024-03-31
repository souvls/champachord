import Link from 'next/link'
import React from 'react'

const SideBar = () => {
    return (
        <div className='w-[15rem] h-[100%] bg-blue-500 text-white'>
            <div className='text-center p-3'>Admin</div>
            <div className='flex flex-col'>
                <Link href={"/admin"} className='p-3 hover:bg-white hover:text-black hover:transition duration-150 ease-in-out'>Dashboard</Link>
                <Link href={"/admin/requestsong"} className='p-3 hover:bg-white hover:text-black hover:transition duration-150 ease-in-out'>ຈັດການຄຳຂໍເພງ</Link>
                <Link href={"/admin"} className='p-3 hover:bg-white hover:text-black hover:transition duration-150 ease-in-out'>ຈັດການເພງ</Link>
                <Link href={"/admin"} className='p-3 hover:bg-white hover:text-black hover:transition duration-150 ease-in-out'>ເພີ່ມເພງໃໝ່</Link>
            </div>
        </div>
    )
}

export default SideBar