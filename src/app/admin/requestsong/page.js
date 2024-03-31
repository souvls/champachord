"use client";
import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Loading'
import getAllrequest from '../../../api/api_song'

const RequestSong = () => {
    const [isLoading, setLoading] = useState(false);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchdata();
    }, [])

    async function fetchdata() {
        setLoading(true);
        const data = await getAllrequest();
        if (data) {
            setRequests(data.data)
        }

        setLoading(false);
    }
    return (
        <div>
            <div className='w-full text-2xl pb-3 border-b-2'><h1>ລາຍການເພງທີຖືກຂໍ</h1></div>
            <div className='pt-5'>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    id
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    song name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    composer
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    singer
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    youtube_link
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    request_date
                                </th>
                                {/* <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? <Loading /> :
                                requests.map((item, index) => {
                                    return (
                                        <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item._id}
                                            </th>
                                            <td class="px-6 py-4">
                                                {item.song_name}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item.composer}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item.singer}
                                            </td>
                                            <td class="px-6 py-4 ">
                                                <a href={item.youtube_link} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{item.youtube_link}</a>
                                            </td>
                                            <td class="px-6 py-4">
                                                {item.request_date.toLocaleDateString()}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>song name</th>
                            <th>composer</th>
                            <th>singer</th>
                            <th>youtube_link</th>
                            <th>request_date</th>
                            <th></th>
                        </tr>

                    </thead>
                </table>
            </div>
        </div>
    )
}

export default RequestSong