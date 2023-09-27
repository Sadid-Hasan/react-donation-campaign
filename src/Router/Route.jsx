import {  Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Details from "../pages/Details/Details";



const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element: 
                <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
                
        children:[
            {
                path : "/",
                element:<Home></Home>,
                loader:()=>fetch('/card.json')
            },
            {
                path : "/donation",
                element:<Donation></Donation>
            },
            {
                path : "/statistics",
                element:<Statistics></Statistics>
            },
            {
                path :"/details/:id",
                element:<Details></Details>,
                loader:()=>fetch('/card.json')
            }
        ]

    }
])
export default myCreatedRoute;