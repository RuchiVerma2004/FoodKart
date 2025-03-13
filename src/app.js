import React, { lazy, Suspense, useEffect, useState, useContext} from "react";

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About.js";
import ResMenue from "./components/ResMenue.js";
import Error from "./components/Error.js";
// import restaurants from "./utils/mockdata";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
// import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UseContext from "./utils/userContext.js";

const AppLayout = ()=>{

    //authentication
    // useEffect(()=>{
    //     const data = {
    //         name: "Ruchi Verma",
    //     };
    //     setUserName(data.name);
    // }, []);

    
    console.log("Applayout");
    return (
        <Provider store={appStore}>
           
                <div className="app">

                    <Header/>
                    <Outlet/>
                </div>
            
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        
        path: "/",
        element:<AppLayout />,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurent/:id",
                element: <ResMenue />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        errorElement:<Error/>,
    }
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);