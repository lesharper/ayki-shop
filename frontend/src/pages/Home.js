import React from 'react';
import Banner from "../components/Banner/Banner";
import man from "../img/manbtn.jpg"
import woman from "../img/womanbtn.jpg"
import RedirectButton from "../components/RedirectButton/RedirectButton";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <div className="flex justify-center w-full my-20">
                <div className="w-[1000px] flex justify-around ">
                    <RedirectButton text="Для него" image={man}/>
                    <RedirectButton text="Для нее" image={woman}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
