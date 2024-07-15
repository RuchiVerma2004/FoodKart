import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btn, setBtn] = useState("Login");
    // const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between items-center shadow-xl bg-black text-white sticky top-0 w-full z-10 right-0">
            <div>
                <img className="logo w-20 mx-20" src={LOGO_URL} alt="img not found" />
            </div>
            <div>
                <ul className="flex mx-16 font-bold">
                    <li className="mx-4">
                        <Link to="" className="transition-colors duration-500 hover:text-yellow-500">
                            Online Status: {useOnlineStatus() ? "✅" : "🔴"}
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link to="/" className="transition-colors duration-700 hover:text-yellow-500">
                            Home
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link to="/about" className="transition-colors duration-700 hover:text-yellow-500">
                            About Us
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link to="/contact" className="transition-colors duration-700 hover:text-yellow-500">
                            Contact Us
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link to="/" className="transition-colors duration-700 hover:text-yellow-500">
                            Cart
                        </Link>
                    </li>
                    <li className="mx-4">
                        <button
                            className="transition-colors duration-700 hover:text-yellow-500"
                            onClick={() => {
                                btn === "Login" ? setBtn("Logout") : setBtn("Login");
                            }}
                        >
                            {btn}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
