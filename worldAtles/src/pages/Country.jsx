import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../Component/UI/Loder"
import { CountryCard } from "../Component/Layout/CountryCard"



export const Country = ()=>{

const [isPending, startTransition] = useTransition()
const [countries, setCountries] = useState([])

    useEffect(()=>{
startTransition(async()=>{
const res = await getCountryData()
console.log(res.data)
setCountries(res.data)
})
},[])

    if(isPending) return <Loader/>
    

    return(
        <>

<div>
    <ul className="country-list">
        {countries.map((curCountry, index)=>{
return <CountryCard country={curCountry} key={index} />
        })}
    </ul>
</div>
        </>
    )
}