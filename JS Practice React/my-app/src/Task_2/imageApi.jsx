import axios from "axios";

const URL = "https://dog.ceo/api/breeds/image/random"

export const getImageByURL = async () => {
    const resp = await axios.get(URL)
    console.log(resp.data.message);
    return resp.data.message
}