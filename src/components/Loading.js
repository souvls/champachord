import React from 'react'
import { Audio } from 'react-loader-spinner'
export default function Loading() {
    return (
        <Audio
            width="20"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
        />
    )
}
