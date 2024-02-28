import logo from "./assets/logo.png";
import img2 from "./assets/2.png";
import "./style.css";

export default function RightHeader(){
    return (
        <div className="rightHeader">
            <div className="logo">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="header-info">
                <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
            </div>
            <div className="header-main-img">
                <img className="img2" src={img2} alt="header-img"/>
            </div>
            <div className="header-sec-info">
                <p className="text">Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>

        </div>
    )
}