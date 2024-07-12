import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () =>{
    const [btn, setBtn] = useState("Login");
    // const onlineStatus = useOnlineStatus();

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="img not found"/>
        </div>
        <div className="nav-items">
            <ul className="">
                <li><Link to ="">Online Status: {useOnlineStatus() ? "✅" : "🔴" }</Link></li>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/">Cart</Link></li>
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