import img3 from "./assets/3.png";
import "./style.css";
export default function Body(){

    return(
        <div className="body">
            <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <div>
                <img className="img3" src={img3} />
            </div>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            <div className="line"></div>
        </div>
    )
}