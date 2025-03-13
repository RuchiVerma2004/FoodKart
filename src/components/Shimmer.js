import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
    return (
        <div className="m-auto w-10/12 mt-10">
            <div className="flex flex-wrap">
                {Array.from({ length: 28 }).map((_, index) => (
                    <ShimmerCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default Shimmer;
