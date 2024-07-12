import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetchRestaurants from "../utils/useFetchRestaurants"; 
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const { ListOfRestaurents, filterListOfRestaurent, setFilterListOfRestaurent, loading } = useFetchRestaurants();
    const [searchText, setSearchText] = useState("");

    if(useOnlineStatus ()=== false){
        return <h1>You are Offline please check your Internet Connection </h1>;
    }

    if (loading) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter-bar">
                <input 
                    type="text" 
                    className="search-box"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button 
                    className="search"
                    onClick={() => {
                        const filteredData = ListOfRestaurents.filter((data) => 
                            data.info.cuisines.some((cuisine) =>
                                cuisine.toLowerCase().includes(searchText.toLowerCase())
                            )
                        );
                        setFilterListOfRestaurent(filteredData);
                    }}
                >
                    Search
                </button>
                <button 
                    className="filterbtn"
                    onClick={() => {
                        const filteredData = ListOfRestaurents.filter((data) => data.info.avgRating > 4);
                        setFilterListOfRestaurent(filteredData);
                    }}
                >
                    Top Rated Restaurent
                </button>
            </div>
            <div className="Restaurent-Container">
                {
                    filterListOfRestaurent.map((restaurent) => (
                        <Link key={restaurent.info.id} to={"/restaurent/" + restaurent.info.id}>
                            <RestaurentCard resData={restaurent} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
