import axios from "axios";
const token = import.meta.env.VITE_API_KEY;

export const searchPhotos = async (query)=>{
    try {
        let res = await axios.get(`https://api.unsplash.com/search/photos?query=${query}`, {
            headers: {
                Authorization: `Client-ID ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getAPhoto = async (id)=>{
    try {
        let res = await axios.get(`https://api.unsplash.com/photos/${id}`, {
            headers: {
                Authorization: `Client-ID ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}