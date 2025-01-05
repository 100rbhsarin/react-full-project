import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../Component/UI/Loder"
import { CountryCard } from "../Component/Layout/CountryCard"
import { SearchFilter } from "../Component/Layout/SearchFilter"



export const Country = ()=>{

const [isPending, startTransition] = useTransition()
const [countries, setCountries] = useState([])

const [search, setSearch] = useState();
const [filter,setFilter] = useState("all");



    useEffect(()=>{ 
startTransition(async()=>{
const res = await getCountryData()
console.log(res.data)
setCountries(res.data)
})
},[])

    if(isPending) return <Loader/>
    
    // console.log(search, filter)


    const searchCountry = (country) => {
        if (search) {
          return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
      };

const filterRegion = (country)=>{
if(filter === "all") return country
return country.region === filter
}
    
    //here is a main logic
    const FilterCountries = countries.filter(
        (country) => searchCountry(country) && filterRegion(country)
    )

    return(
        <>
        <section>
            <SearchFilter 
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            countries={countries}
            setCountries={setCountries}
            />
<div>
    <ul className="country-list">
        {FilterCountries.map((curCountry, index)=>{
return <CountryCard country={curCountry} key={index} />
        })}
    </ul>
</div>
</section>
        </>
    )
}