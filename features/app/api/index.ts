import axios from "axios"

export const fetchData = async(header: string) => {
 const res = await axios.get(`https://simple-blog-api.crew.red/${header}`);
 return await res.data;
}