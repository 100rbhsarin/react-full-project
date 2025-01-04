import "./CountryCard.css";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;

    return (
        <li className="country-card">
            <div>
                <img src={flags.svg} alt={flags.alt || `${name} flag`} />
            </div>
            <div className="country-card-info">
                 <h3>  {name.common}</h3>
                <p>Capital: {capital}</p>
                <p>Population: {population.toLocaleString()}</p>
                <p>Region: {region}</p>

                <NavLink to={`/country/${name.common}`}>
                <button className="translucent-button"> Read More...</button>
                </NavLink>
            </div>
        </li>
    );
};
