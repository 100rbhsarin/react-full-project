import { NavLink } from "react-router-dom"
import './Header.css'

export const Header = ()=>{

    return(
        <>
    <div className="container">
        <div className="grid navebar-grid grid-two-cols">
            <div className="logo">
                <NavLink to= '/'>
                <h1>World Info</h1>
                </NavLink>
                </div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/country">Country</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>

           
        </div>
    </div>
        </>


    )
}