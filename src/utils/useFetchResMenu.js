import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const useFetchResMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        getData();
    }, [id]);

    const getData = async () => {
        try {
            const data = await fetch(MENU_URL + id);
            const json_data = await data.json();
            console.log(json_data.data);
            setResMenu(json_data.data);
        } catch (error) {
            console.error("Error fetching menu data:", error);
        }
    };

    return resMenu;
};

export default useFetchResMenu;
