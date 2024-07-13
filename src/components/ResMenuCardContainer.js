import MenuCard from "./MenuCard";

const ResMenuCardContainer =({itemContainer})=>{
    console.log("ResMenuconayiner");
console.log(itemContainer);
return (
            <div>
            <h3 className="menu-heading">{itemContainer?.title}</h3>
                {itemContainer.itemCards?.map((detail) => (
                    <MenuCard key={detail.card?.info?.id} data={detail} />
                ))}

            </div>
        );

}


export default ResMenuCardContainer; 

