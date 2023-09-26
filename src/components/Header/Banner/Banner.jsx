import React from 'react';

const Banner = () => {
    return (
<section className="flex items-center flex-1 lg:m-20">
            <div className="flex flex-col w-full ">
                <h1 className="text-2xl  text-center lg:text-5xl">
                I Grow By Helping People In Need
                </h1>
                <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                    <input id="email" type="text" className="px-6 py-3 text-gray-700 bg-white border rounded-md  focus:border-red-400 focus:ring-white-300 focus:ring-opacity-40 focus:outline-none focus:ring sm:mx-2" placeholder="Search here" />
                    <button className="h-12 px-6 m-2  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80 ">
                    Search
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;