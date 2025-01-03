import footerContact from "../../api/FooterApi.json"
import "./Footer.css"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

export const Footer = ()=>{

    
const footerIcon = {
            MdPlace: <MdPlace/>,
            IoCallSharp: <IoCallSharp/>,
            TbMailPlus: <TbMailPlus/>

        }
    

    return(
        <>
   <footer className="footer-main">
    <div className="container-grid">{

        (footerContact.map((contact, index)=>{
            const {icon, title, details } = contact
            return(

        <div className="footer-contact" key={index}>
<div className="icon"> {footerIcon[icon]}</div>
<div className="title">
   <p>{title}</p> 
   <p>{details}</p>

</div>

                </div>
            )
        }))
        }</div>


   </footer>
        </>


    )
   
}