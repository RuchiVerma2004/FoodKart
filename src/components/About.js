import User from "./User";
const About = ()=>{
    return (
        <div className="about-us-container bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About FoodKart</h1>
            <p className="text-lg text-gray-700 text-center mb-8">
              Welcome to <span className="font-semibold text-black">FoodKart</span>! Your ultimate destination for discovering and ordering delicious food from the comfort of your home. Inspired by the Swiggy API, Food Cart is a learning project aimed at delivering a seamless food ordering experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="feature-card p-4 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  At Food Cart, our mission is to connect food lovers with their favorite restaurants and cuisines, providing a fast, reliable, and enjoyable food delivery experience.
                </p>
              </div>
              <div className="feature-card p-4 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learning Purpose</h2>
                <p className="text-gray-700">
                  This platform is built using the Swiggy API to understand real-world API integrations, improve technical skills, and create user-centric applications.
                </p>
              </div>
              <div className="feature-card p-4 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                <p className="text-gray-700">
                  Discover a wide range of restaurants, explore diverse cuisines, and enjoy an intuitive and secure food ordering experience.
                </p>
              </div>
              <div className="feature-card p-4 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  Have feedback or suggestions? We’d love to hear from you! Reach out to us at <span className="text-indigo-600 font-medium">contact@foodcart.com</span>.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-gray-800">Happy Ordering!</h3>
              <p className="text-gray-600">Thank you for being a part of the Food Cart journey.</p>
            </div>
          </div>
        </div>
      );
    };
    
    export default About;
   
