import axios from "axios";


export function getData({q,s}){

    axios.get(`https://newsapi.org/v2/everything?q=${q}&pageSize=${s}&apiKey=e3d9b1100f4a480fb9831e24ed16aacc`)
}

 