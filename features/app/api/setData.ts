import axios from "axios"

export const postData = async (src : string , data : any) =>{
   await axios.post(`https://simple-blog-api.crew.red/${src}` , data);
}