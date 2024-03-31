import { api_url } from './apiconfig';
import axios from "axios";
import qs from "qs"
export async function getLogin(email,password) {
    let data = qs.stringify({
        'email': email,
        'password': password
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: api_url+'/api/auth/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    try {
        const response = await axios.request(config);
        if (response.status === 200) {
            console.log(response)
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}
function getToken(){
    return localStorage.getItem("mytoken");
}


