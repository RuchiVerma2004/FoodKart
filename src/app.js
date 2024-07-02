import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About.js";
// import restaurants from "./utils/mockdata";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";



const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
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
        ],
        errorElement:<Error/>,
    }
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);