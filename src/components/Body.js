import RestaurentCard, { withPromotedLabel} from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetchRestaurants from "../utils/useFetchRestaurants"; 
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurentCard";

const Body = () => {
  
    const { ListOfRestaurents, filterListOfRestaurent, setFilterListOfRestaurent, loading } = useFetchRestaurants();
    const [searchText, setSearchText] = useState("");
    const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
    console.log("promoted",RestaurentCardPromoted);
   console.log(ListOfRestaurents);


    console.log("body rendered");
    if(useOnlineStatus() === false){
        return <Shimmer />;
    }

    if (loading) {
        return <Shimmer />;
    }
  
    return (
        <div className="m-auto w-10/12 mt-10">
            <div className="m-4 mt-10">
                <input 
                    type="text" 
                    className="border border-solid border-black rounded-xs"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button 
                    className="bg-green-800 text-white px-4 mx-4 rounded-xs"
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
                    className="mx-10 bg-gray-200 border border-black px-4 rounded-xs"
                    onClick={() => {
                        const filteredData = ListOfRestaurents.filter((data) => data.info.avgRating > 4.5);
                        setFilterListOfRestaurent(filteredData);
                    }}
                >
                    Top Rated Restaurent
                </button>
            </div>
            <div className="flex flex-wrap">
                {
                    filterListOfRestaurent.map((restaurent) => (
                        <Link key={restaurent.info.id} to={"/restaurent/" + restaurent.info.id}>
                           { restaurent?.data?.promoted ?
                            <RestaurentCardPromoted resData={restaurent} />
                           :
                            <RestaurentCard resData={restaurent} />
                          }
                        </Link>
                    ))
                }
            </div>
            <div className="flex flex-wrap">
                {
                    filterListOfRestaurent.map((restaurent) => (
                        <Link key={restaurent.info.id} to={"/restaurent/" + restaurent.info.id}>
                           { restaurent?.data?.promoted ?
                            <RestaurentCardPromoted resData={restaurent} />
                           :
                            <RestaurentCard resData={restaurent} />
                          }
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
