"use client"

import ListSongRequest from "@/components/ListSongRequest";
import Advertisment from "@/components/Advertisement";
import { useState } from "react";
import Search from "@/components/Search";


export default function ReqSong() {
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [singer, setSinger] = useState("");
    const [linkYT, setLinkYT] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setErrors(errors);
    }
    const validate = () => {
        const error = {};

        if (!title) {
            error.title = "ລືມຊື່ເພງ...!"
        }
        if (!singer) {
            error.singer = "ແນ...ລືມຊື່ນັກຮ້ອງອີກ!"
        }
        if (!linkYT) {
            error.linkYT = "ໃສ່ລິ້ງຢູທູບໃຫ້ຂ້ອຍແນ່!"
        }
        return error;
    }

    return (
        <>
            <div className="flex items-center bg-[url('../assets/bg_img/bg_2.jpg')] bg-cover bg-no-repeat">
                <div className="container p-4 max-w-screen-lg m-auto lg:p-0">
                    <div className="pt-4">
                        <Search />
                    </div>
                    <div className="my-10 p-4 bg-white rounded">
                        <div className="">
                            <h1 className="text-center mb-1">ລາຍລະອຽດເພງທີ່ເຈົ້າຕ້ອງການຂໍ</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" onChange={(e) => setTitle(e.target.value)} className="w-full my-2 text-black outline-none p-2 border-b-2" placeholder="ຊື່ເພງ" />
                                        {errors.title && <span className='pt-1 text-red-500'>{errors.title}</span>}
                                    </div>
                                    <div>
                                        <input type="text" onChange={(e) => setSinger(e.target.value)} className="w-full my-2 text-black outline-none p-2 border-b-2" placeholder="ຊື່ນັກຮ້ອງ" />
                                        {errors.singer && <span className='pt-1 text-red-500'>{errors.singer}</span>}
                                    </div>
                                </div>
                                <div>
                                    <input type="text" onChange={(e) => setLinkYT(e.target.value)} className="w-full my-2 text-black outline-none p-2 border-b-2" placeholder="Link youtube" />
                                    {errors.linkYT && <span className='pt-1 text-red-500'>{errors.linkYT}</span>}
                                </div>
                                <div className="flex justify-center mt-2">
                                    <button className="bg-green-500 px-4 py-2 text-white rounded">ສົ່ງ</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div>

                <br />
                <hr />
                <Advertisment />
                <hr />
                <ListSongRequest />
            </div>
        </>
    )
}