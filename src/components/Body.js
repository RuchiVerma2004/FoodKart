import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
// import restaurants from "../utils/mockdata"; **use this if api is not working and comment useEffect() and fetchData() 

const Body = () =>{

    const [ListOfRestaurents, setListOfRestaurent] = useState([]);
    // uncomment below line if api is not working and comment above line.
    // const [ListOfRestaurents, setListOfRestaurent] = useState(restaurants);

    
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const json_data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        const j_data = await json_data.json();

        console.log(j_data);
        // optional chaining in JavaScript
        setListOfRestaurent(j_data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // conditional rendiring
    if(ListOfRestaurents.length === 0){
        return <Shimmer/>

    }
    return (
        <div className="body">
            <div className="Search">
                <button 
                onClick={()=>{
                        const filterData = ListOfRestaurents.filter(
                            (data)=> data.info.avgRating > 4
                        );
                        setListOfRestaurent(filterData);
                    }}
                    >
                    filter my data
                </button>
            </div>
            <div className="Restaurent-Container">
               
                {
                  ListOfRestaurents.map((restaurent) => (<RestaurentCard key={restaurent.info.id} resData={restaurent}/>))
                }   
                {/* react alwas say do not use index as key/ */}
                
            </div>
        </div>
    );
};

export default Body;

// never ever keep hard coded data in component file