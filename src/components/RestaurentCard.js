import { CDN_URL } from "../utils/constants";

const RestaurentCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo, aggregatedDiscountInfoV3 } = resData?.info;

    return (
        <div className="restaurent-card">
            <img className="card-img" src={CDN_URL + cloudinaryImageId} alt="not found" />
            <h3 className="restaurent-name">{name}</h3>
            <p className="cuisine">{cuisines.join(", ")}</p>
            <div className="detail">
                <p className="rating">{avgRating}</p>
                <p className="time">{sla.slaString}</p>
                <p className="price">{costForTwo}</p>
            </div>
            <hr/>
            {aggregatedDiscountInfoV3 && (aggregatedDiscountInfoV3.header || aggregatedDiscountInfoV3.subHeader) && (
                <p className="offer">
                    {`${aggregatedDiscountInfoV3.header || ''} ${aggregatedDiscountInfoV3.subHeader || ''}`}
                </p>
            )}
        </div>
    );
};

export const withPromotedLabel = (RestaurentCard) => {

    return (props)=>{
        return (
            <div>
            <label>Promoted</label>
            <RestaurentCard {...props}/>
            </div>
        );
    };

};

export default RestaurentCard;
