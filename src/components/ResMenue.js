import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";



const ResMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
      
            const data = await fetch(MENU_URL + id);
            const json_data = await data.json();
            console.log(json_data.data);
            setResMenu(json_data.data);
       
    };

    if (resMenu == null) return <Shimmer />;

    const { name, city, cuisines } = resMenu?.cards[2]?.card?.card?.info ;
    const { itemCards, title } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu-container">
            <div className="menu-item">
                <h1 className="res-name">{name}</h1>
                <p className="menu-cuisines">{cuisines?.join(", ")}</p>
                <hr/>
                <h3 className="menu-heading">{title}</h3>
                {itemCards?.map((detail) => (
                    <MenuCard data={detail}/>
                ))}
               
            </div>
        </div>
    );
};

export default ResMenu;
