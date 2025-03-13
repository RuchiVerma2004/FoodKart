import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuCard = ({ data }) => {
  const { name, category, description, imageId, price, ratings, defaultPrice } =
    data?.card?.info;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="border-b-2">
      <div className="flex my-10 justify-between items-center">
        <div className="w-8/12">
          <div className="text-gray-800 font-bold">{name}</div>
          <div className="font-semibold">
            ₹ {defaultPrice ? defaultPrice / 100 : price / 100}{" "}
          </div>
          {ratings?.aggregatedRating?.rating &&
            ratings?.aggregatedRating?.ratingCountV2 && (
              <div className="food-rating">
                {ratings.aggregatedRating.rating +
                  " (" +
                  ratings.aggregatedRating.ratingCountV2 +
                  ") "}
              </div>
            )}
          <div className="text-gray-700">{description}</div>
        </div>
        <div className="w-3/12 relative">
          <img src={IMG_URL + imageId} alt="img-not-found" className="w-full" />
          <button
            className="px-10 py-1 text-lg font-bold bg-white text-green-700 shadow-2xl rounded-lg m-auto border border-green-700 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
            onClick={() => {
              handleAddItem(data);
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
