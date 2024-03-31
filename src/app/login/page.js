"use client"
import { React, useState } from 'react'
import { useRouter } from 'next/navigation';
import { api_url } from '../../api/apiconfig'
const page = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const axios = require("axios");
        const qs = require('qs');

        let data = qs.stringify({
            'email': email,
            'password': password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: api_url + '/api/auth/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        try {
            const response = await axios.request(config);
            if (response.status === 200) {
                if(response.data.isAdmin){
                    localStorage.setItem("mytoken",response.data.token)
                    router.push('/admin');
                }else{

                }
            }

        } catch (error) {
            console.error(error);
            return false;
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email' />
                <input
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password' />
                <input type='submit' value={"login"} />
            </form>
        </div>
    )
}

export default page
