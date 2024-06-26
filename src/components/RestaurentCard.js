import { CDN_URL } from "../utils/constants";

const RestaurentCard = ({resData})=>{
    const {cloudinaryImageId, name, cuisines, avgRating, sla,costForTwo } = resData?.info;

    return (
       
        <div className="restaurent-card">
            <img className="card-img" src={CDN_URL+cloudinaryImageId} alt="not found"/>
            <h3 className="restaurent-name">{name}</h3>
            <p className="cuisine">{cuisines.join(", ")}</p>
            <div className="detail">
                <p className="rating">{avgRating}</p>
                <p className="time">{sla.slaString}</p>
                <p className="price">{costForTwo}</p>
            </div>
            <hr/>
            <p className="offer">{resData.info.aggregatedDiscountInfoV3.header+" "+resData.info.aggregatedDiscountInfoV3.subHeader}</p>
        </div>
    );
};

export default RestaurentCard;