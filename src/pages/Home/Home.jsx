import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/Card/Cards";




const Home = () => {
         const cards =useLoaderData()
         
    
    return (
        <div>
            <Banner></Banner>
            <Cards cards ={cards}></Cards>
        </div>
    );
};

export default Home;