import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import UserContext from "../utils/userContext";

const Header = () => {
    const [btn, setBtn] = useState("Login");
    // const onlineStatus = useOnlineStatus();
    console.log("header rendered");

    // subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);

    // console.log(cartItems);
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="flex justify-between items-center shadow-xl bg-black text-white sticky top-0 w-full h-20 z-10 right-0 ">
            <div className="flex flex-row items-center w-30">
                <img className="logo w-16 ml-16" src={LOGO_URL} alt="img not found" />
                <div className="mx-4 font-bold text-2xl text-yellow-500">FoodKart</div>
            </div>
            <div>
                <ul className="flex mx-16 font-bold">
                    <li className="mx-4">
                        <div>
                            Online Status: {useOnlineStatus() ? "🟢" : "🔴"}
                        </div>
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
                        <Link to="/cart" className="transition-colors duration-700 hover:text-yellow-500">
                            Cart-({cartItems.length} items)
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
                        {<div>{loggedInUser}</div>}
                </ul>
            </div>
        </div>
    );
};

export default Header;
