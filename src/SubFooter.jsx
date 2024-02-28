import { FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
export default function SubFooter(){
    return(
        <div className="subFooter">
            <div className='footerInfo'>
                <a className="icon" href="#"><IoCall/></a>
                <p>Toll free <b>1800 200 1234</b></p>
            </div>
            <div className='footerInfo'>
                <a className="icon" href="www.facebook.com/cripumps"><FaFacebook /></a>
                <p>www.facebook.com/cripumps</p>
            </div>
            <div className='footerInfo'>
                <a className="icon" href="www.crigroups.com"><FaGlobe/></a>
                <p>www.crigroups.com</p>
            </div>
        </div>
    )
}