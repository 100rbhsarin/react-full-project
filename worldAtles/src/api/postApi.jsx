import axios from 'axios';

const API = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})


//HTTP get method

export const getCountryData =() =>{
    return API.get("/all?fields=name,capital,flags,population,area,languages,region")
}

//HTTP GET method from individual country

export const getCountryDtails = (name)=>{
    return API.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}