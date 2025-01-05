import { useTransition, useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import { getCountryData, getCountryDtails } from "../../api/postApi"
import { Loader } from "../UI/Loder"
import "./CountryDeatails.css"

export const CountryDetails = ()=>{
    const params = useParams()
const [isPending, startTransition] = useTransition()
const [country, setCountrie] = useState()

    useEffect(()=>{
startTransition(async()=>{
const res = await getCountryDtails(params.id)
console.log(res.data)
if(res.status === 200){
    console.log(200)
    setCountrie(res.data[0])
}
console.log(Object.keys(res.data[0].name.nativeName));
})
},[])
    console.log(params)

     if(isPending) return <Loader/>
return(
    <>
   <section className="country-details container">
  <div className="country-details-wrapper">
    {country && (
      <div className="country-details-content">
        {/* Flag on the left */}
        <div className="country-details-flag">
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className="flag-image"
          />
        </div>

        {/* Details on the right */}
        <div className="country-details-info">
          <p className="country-title"> {country.name.official} </p>
          <div className="info-container">
            <p>
              <span className="label"> Native Names:</span>
              {Object.keys(country.name.nativeName)
                .map((key) => country.name.nativeName[key].common)
                .join(", ")}
            </p>
            <p>
              <span className="label"> Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="label"> Region:</span>
              {country.region}
            </p>
            <p>
              <span className="label"> Sub Region:</span>
              {country.subregion}
            </p>
            <p>
              <span className="label"> Capital:</span>
              {country.capital}
            </p>
            <p>
              <span className="label">Top Level Domain:</span>
              {country.tld[0]}
            </p>
            <p>
              <span className="label"> Currencies: </span>
              {Object.keys(country.currencies)
                .map((curElem) => country.currencies[curElem].name)
                .join(", ")}
            </p>
            <p>
              <span className="label">Languages: </span>
              {Object.keys(country.languages)
                .map((key) => country.languages[key])
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    )}
    <div className="back-button">
      <NavLink to="/country">
        <button>Go Back</button>
      </NavLink>
    </div>
  </div>
</section>

    </>
)

}