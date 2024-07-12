import React from "react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useFetchResMenu from "../utils/useFetchResMenu"; 

const ResMenu = () => {
    const resMenu = useFetchResMenu();

    if (resMenu == null) return <Shimmer />;

    const { name, city, cuisines } = resMenu?.cards[2]?.card?.card?.info;
    const { itemCards, title } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu-container">
            <div className="menu-item">
                <h1 className="res-name">{name}</h1>
                <p className="menu-cuisines">{cuisines?.join(", ")}</p>
                <hr />
                <h3 className="menu-heading">{title}</h3>
                {itemCards?.map((detail) => (
                    <MenuCard key={detail.card?.info?.id} data={detail} />
                ))}
            </div>
        </div>
    );
};

export default ResMenu;
