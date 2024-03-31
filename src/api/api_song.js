import { api_url } from './apiconfig';
import axios from "axios";

export default  async function Allrequest() {
    let config = {
        method: 'get',
        url: `${api_url}/api/song-requests`,
    };
    try {
        const response = await axios.request(config);
        if (response.status === 200) {
            return response.data
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}
export const  getSongByID = async(id) => {
    let config = {
        method: 'get',
        url: `${api_url}/api/song/`+id,
    };
    try {
        const response = await axios.request(config);
        if (response.status === 200) {
            return response.data
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}