import { useEffect, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../Component/UI/Loder"



export const Country = ()=>{

const [isPending, startTransition] = useTransition()
const [countries, setCountries] = useState([])

    useEffect(()=>{
startTransition(async()=>{
const res = await getCountryData()
setCountries(res.data)
})
},[])

    if(isPending) return <Loader/>
    

    return(
        <>

        </>
    )
}