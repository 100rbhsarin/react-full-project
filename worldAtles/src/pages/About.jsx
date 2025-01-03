import countryInfo from '../api/countryfact.json'
import "./About.css"

export const About = ()=>{

    return(
        <>
        <section className="section-about">
            <h2 className="container-title"> Here are the Intresting Facts
            <br />
            WE ARE PROUD
            </h2>
          



<div className="card-container">
{countryInfo.map((country)=>{
           const {id, country_name, capital, population, interesting_fact} = country 
           return( 
            <div className="card" key={id}>
        <div className="containers bg-primary">
            <p className="card-title">{country_name}</p>
            <p>
                <span className="card-discription">
                    Capital:
                </span>{capital}
            </p>
            <p>
                <span className="card-discription">Population : </span>
                {population}
            </p>
            
            <p className="card-discription">
                <span className="Intrsring Fact">Intrsting Fact :</span>
{interesting_fact}
            </p>
                    </div>
    </div>

           )
        })}
    
</div>

        </section>
        </>
    )
}