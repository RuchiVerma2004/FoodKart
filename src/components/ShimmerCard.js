const ShimmerCard = ()=>{
    return (
        <div className="restaurent-card w-64 rounded-2xl p-2 m-4 bg-white flex flex-col justify-between">
          <div className="rounded-sm animate-pulse">
            <div className="rounded-2xl w-full h-36 bg-gray-200"></div>
          </div>
          <div className="px-4 animate-pulse">
            {/* Title Placeholder */}
            <div className="mt-5 h-6 bg-gray-200 rounded-md w-3/4"></div>
            
            {/* Details Placeholder */}
            <div className="flex justify-between my-2">
             
            </div>
    
            {/* Cuisine Placeholder */}
            <div className="text-gray-600">
              <div className="h-5 bg-gray-200 rounded-md w-full mb-2"></div>
              <div className="h-5 bg-gray-200 rounded-md w-full mb-2"></div>
              <div className="h-5 bg-gray-200 rounded-md w-full mb-2"></div>
            
            </div>
    
            

          </div>
        </div>
      );
};

     

export default ShimmerCard;
