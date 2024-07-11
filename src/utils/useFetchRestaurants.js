import { useState, useEffect } from "react";
import { DATA_URL } from "./constants";

const useFetchRestaurants = () => {
    const [ListOfRestaurents, setListOfRestaurent] = useState([]);
    const [filterListOfRestaurent, setFilterListOfRestaurent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const json_data = await fetch(DATA_URL);
                const j_data = await json_data.json();
                const restaurantList = j_data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                setListOfRestaurent(restaurantList);
                setFilterListOfRestaurent(restaurantList);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { ListOfRestaurents, filterListOfRestaurent, setFilterListOfRestaurent, loading };
};

export default useFetchRestaurants;
