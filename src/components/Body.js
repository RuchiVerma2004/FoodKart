import RestaurentCard from "./RestaurentCard";
import restaurants from "../utils/mockdata";

const Body = () =>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="Restaurent-Container">
               
                {
                  restaurants.map((restaurent) => (<RestaurentCard key={restaurent.info.id} resData={restaurent}/>))
                }   
                {/* react alwas say do not use index as key/ */}
                
            </div>
        </div>
    );
};

export default Body;

// never ever keep hard coded data in component file