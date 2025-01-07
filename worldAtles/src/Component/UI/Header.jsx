import { NavLink } from "react-router-dom"
import { LuMenu } from "react-icons/lu";
import './Header.css'
import { useState } from "react";

export const Header = ()=>{
const [show, setShow] = useState(false)

   const handleButtonToggle = ()=>{
return setShow(!show)
   }
    return(
        <>
    <div className="header-container">
        <div className="grid navebar-grid grid-two-cols">
            <div className="logo">
                <NavLink to= '/'>
                <p>WORLD  INFO</p>
                </NavLink>
                </div>
                <nav className = { show ? "menu-mobile" : "menu-web" }>
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
<div className="ham-menu">
<button onClick={handleButtonToggle}>
<LuMenu />
</button>
</div>
           
        </div>
    </div>
        </>


    )
}