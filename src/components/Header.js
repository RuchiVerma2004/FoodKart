import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () =>{
    const [btn, setBtn] = useState("Login");

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="img not found"/>
        </div>
        <div className="nav-items">
            <ul className="">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Cart</a></li>
                <button
                onClick={
                    ()=>{
                        btn === "Login" ? setBtn("Logout") : setBtn("Login");
                    }
                }
                >{btn}</button>
            </ul>
           
        </div>
    </div>
    );
};

export default Header;