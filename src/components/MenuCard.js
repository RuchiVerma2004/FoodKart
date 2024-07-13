import { IMG_URL } from "../utils/constants";

const MenuCard = ({data})=>{
    // const {name,category,description,imageID,itemAttribute,defaultPrice,ratings} = detail.card.info;
    // console.log("data");

    // console.log(data);
    const {name,category,description,imageId,price,ratings} = data?.card?.info;
    // console.log(data?.card?.info.imageID);
    return (
        <div>
            <div className="menu-card row-flex">
                <div className="col-flex abt-food">
                    <div className="food-name">{name}</div>
                    <div className="food-price">Rs. {price/100} </div>
                    <div className="food-rating">{ratings?.aggregatedRating?.rating + " (" + ratings?.aggregatedRating?.ratingCountV2 + ") "}</div>
                    <div className="about-food">{description}</div>  
                   
                </div>
                <div className="food-img"><img src={IMG_URL +imageId } alt="img-not-found" /></div>
            </div>
            <hr />
        </div>
    );
};

export default MenuCard;
