import React from "react";
import Shimmer from "./Shimmer";
import ResMenuCardContainer from "./ResMenuCardContainer";
import useFetchResMenu from "../utils/useFetchResMenu"; 

const ResMenu = () => {
    const resMenu = useFetchResMenu();

    if (resMenu == null) return <Shimmer />;

    const { name, cuisines } = resMenu?.cards[2]?.card?.card?.info || {};
    const categoryItems = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    return (
        <div className="">
            <div className="w-6/12 m-auto">
                <h1 className="font-extrabold text-3xl mt-10">{name}</h1>
                <p className="font-semibold mb-10">{cuisines?.join(", ")}</p>
                {categoryItems.map((categoryItem, index) => (
                    <ResMenuCardContainer key={index} itemContainer={categoryItem} />
                ))}
            </div>
        </div>
    );
};

export default ResMenu;
