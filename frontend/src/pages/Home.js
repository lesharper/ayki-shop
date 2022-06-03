import React from 'react';
import Banner from "../components/Banner/Banner";
import man from "../img/manbtn.jpg"
import woman from "../img/womanbtn.jpg"
import RedirectButton from "../components/RedirectButton/RedirectButton";
import ContainerPost from "../components/Posts/ContainerPost";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <ContainerPost/>
        </div>
    );
}

export default Home;
