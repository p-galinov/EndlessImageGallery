import axios from "axios";

const url = "https://api.unsplash.com";
const API_KEY = "PPOHWANo1Lpbp5hB7SscYzinMSxUVtunWGCRc3bxMtw";

export const fetchImages = async () => {
    try{
        const { data } = await axios.get(`${url}/photos/random?client_id=${API_KEY}&count=30`);
        return data;
    }
    catch(err){ }
}
