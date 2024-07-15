import { CDN_URL } from "../utils/constants";

const RestaurentCard = ({ resData }) => {
    console.log("ResturentCard");
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo, aggregatedDiscountInfoV3,areaName } = resData?.info;

    return (
        <div className="restaurent-card w-64 rounded-2xl p-2 m-4 hover:shadow-xl transition-shadow duration-700 bg-white flex flex-col justify-between">
            <div className="rounded-sm">
                <img className="rounded-2xl w-full h-36 object-cover" src={CDN_URL + cloudinaryImageId} alt="not found" />
            </div>
            <div className="px-4">
            <h3 className="font-bold mt-5 overflow-hidden whitespace-nowrap overflow-ellipsis">{name}</h3>
            <div className="detail flex justify-between my-2 font-medium">
                <p className="bg-green-800 px-3 rounded-md text-white ">{avgRating}</p>
                <p className="time">• {sla.slaString}</p>
            </div>

            <div className="text-gray-600">
                <p className="overflow-hidden whitespace-nowrap overflow-ellipsis leading-5">{cuisines.join(", ")}</p>
                <p>{areaName}</p>

            </div>
            {aggregatedDiscountInfoV3 && (aggregatedDiscountInfoV3.header || aggregatedDiscountInfoV3.subHeader) && (
                <p className="offer">
                    {`${aggregatedDiscountInfoV3.header || ''} ${aggregatedDiscountInfoV3.subHeader || ''}`}
                </p>
            )}
            </div>
        </div>
    );
};

export const withPromotedLabel = (RestaurentCard) => {
    return (props) => {
        return (
            <div className="relative w-64">
                <label className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs">Promoted</label>
                <RestaurentCard {...props} />
            </div>
        );
    };
};

export default RestaurentCard;
