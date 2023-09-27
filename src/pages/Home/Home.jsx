import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/Card/Cards";




const Home = () => {
         const cards =useLoaderData()
         
    
    return (
        <div className="">
            <div>
                <Banner></Banner>
            </div>
            <div className=" content-center items-center justify-center">
                <Cards cards ={cards}></Cards>
            </div>
            
        </div>
    );
};

export default Home;