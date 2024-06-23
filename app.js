import React from "react";
import ReactDOM from "react-dom/client";


/*
*Header
* - Logo
* - Nav bar
*Body
* - Search
* - Restaurent Container
* -- Restaurent Card
* - footer
* -- Copyright
* -- Links
* -- Address
* -- Contact
*/     

const Header = () =>{
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://media.istockphoto.com/id/1038355632/vector/hamburger-icon.jpg?s=612x612&w=0&k=20&c=0lwYqfJxkss5KKmDPAFZRJ9_2-z3h1tRAfFyAKpVEYU=" alt="img not found"/>
        </div>
        <div className="nav-items">
            <ul className="">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>
    </div>
    );
};

const RestaurentCard = ()=>{
    return (
        <div className="restaurent-card">
            
        </div>
    );
};

const Body = () =>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="Restaurent-Container">
                <RestaurentCard />
            </div>
        </div>
    );
};

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);