import MenuCard from "./MenuCard";
import { useState } from "react";

const ResMenuCardContainer = ({ itemContainer }) => {

  const { title } = itemContainer.card.card;
  const { itemCards } = itemContainer.card.card;
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div className="border-t-[16px]">
        <div className="flex justify-between items-center cursor-pointer " onClick={toggleDisplay}>
            <h3 className="font-bold my-6 text-xl cursor-pointer" >
                {title}, ({itemCards.length})
            </h3>
            <div className="mr-8">{display?"▲":"▼"}</div>
        </div>
            {display && itemCards?.map((detail) => (
                <MenuCard key={detail.card?.info?.id} data={detail} />
            ))}
    </div>
  );
};

export default ResMenuCardContainer;
