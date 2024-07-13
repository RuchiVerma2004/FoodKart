import React from "react";
import Shimmer from "./Shimmer";
import ResMenuCardContainer from "./ResMenuCardContainer";
import useFetchResMenu from "../utils/useFetchResMenu"; 

const ResMenu = () => {
    const resMenu = useFetchResMenu();

    if (resMenu == null) return <Shimmer />;

    const { name, cuisines } = resMenu?.cards[2]?.card?.card?.info;
    const { card } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card;

    return (
        <div className="menu-container">
            <div className="menu-item">
                <h1 className="res-name">{name}</h1>
                <p className="menu-cuisines">{cuisines?.join(", ")}</p>
                
               <ResMenuCardContainer itemContainer={card}/>
            </div>
        </div>
    );
};

export default ResMenu;
