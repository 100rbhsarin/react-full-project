import axios from 'axios';

const API = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})


//HTTP get method

export const getCountryData =() =>{
    return API.get("/all?fields=name,capital,flags,population,area,languages,region")
}