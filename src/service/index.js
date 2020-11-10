import axios from "axios";

const url = "https://api.unsplash.com";
const API_KEY = "wktmXd8o2Jvkc5_o4Bj6Tl62f1h6LzcWG400Zqq3SpM";

export const fetchImages = async () => {
    try{
        const { data } = await axios.get(`${url}/photos/random?client_id=${API_KEY}&count=30`);
        return data;
    }
    catch(err){ }
}

