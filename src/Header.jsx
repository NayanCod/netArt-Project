import img1 from "./assets/1.png";
import RightHeader from "./RightHeader";
import "./style.css";
export default function Header(){

    return(
        <div className="header">
            <div className="left">
                <img className="img1" src={img1} alt="img1" />
            </div>
            <div className="right">
                <RightHeader/>
            </div>
        </div>
    )
}