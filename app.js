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
            <img className="card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" alt="ing not found"/>
            <h3 className="restaurent-name">Chinese Wok</h3>
            <p className="cuisine">Chinese, Asian, Tibetan, Desserts</p>
            <div className="detail">
                <p className="rating"> 4.3</p>
                <p className="time">40-45 mins</p>
                <p className="price">365</p>
            </div>
            <hr/>
            <p className="offer">30% Off on order above 1000</p>
        </div>
    );
};

const Body = () =>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="Restaurent-Container">
                <RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard />
                <RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard />
                <RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard /><RestaurentCard />
            </div>
        </div>
    );
};

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);