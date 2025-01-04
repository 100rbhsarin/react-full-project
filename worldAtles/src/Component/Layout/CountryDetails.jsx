import { useTransition, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCountryData, getCountryDtails } from "../../api/postApi"
import { Loader } from "../UI/Loder"

export const CountryDetails = ()=>{
    const params = useParams()
const [isPending, startTransition] = useTransition()
const [countrie, setCountrie] = useState([])

    useEffect(()=>{
startTransition(async()=>{
const res = await getCountryDtails(params.id)
console.log(res.data)
if(res.status === 200){
    setCountrie(res.data[0])
}

})
},[])
    console.log(params)

     if(isPending) return <Loader/>
return(
    <>
    <section>
        <div>
       <p>{country.name.official}</p>
        </div>
    </section>
    </>
)

}