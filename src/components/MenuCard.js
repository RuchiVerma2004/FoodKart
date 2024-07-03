const MenuCard = ({data})=>{
    // const {name,category,description,imageID,itemAttribute,defaultPrice,ratings} = detail.card.info;
    console.log("data");

    console.log(data);
    const {name,category,description,imageID,defaultPrice,ratings} = data?.card?.info;
    console.log(data?.card?.info?.imageID);
    return (
        <div>
            <div className="menu-card row-flex">
                <div className="col-flex abt-food">
                    <div className="food-name">{name}</div>
                    <div className="food-price">Rs. {defaultPrice/100} </div>
                    <div className="food-rating">{ratings?.aggregatedRating?.rating + " (" + ratings?.aggregatedRating?.ratingCountV2 + ") "}</div>
                    <div className="about-food">{description}</div>  
                    <div>{imageID}</div>
                </div>
                <div className="food-img"><img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/n5kh2dbbszwjsu1zrzav`} alt="img-not-found" /></div>
            </div>
            <hr />
        </div>
    );
};

export default MenuCard;
