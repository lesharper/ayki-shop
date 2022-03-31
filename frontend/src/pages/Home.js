import React from 'react';
import Banner from "../components/Banner/Banner";
import Container from "../components/Container/Container";
import man from "../img/manbtn.jpg"
import woman from "../img/womanbtn.jpg"
import RedirectButton from "../components/RedirectButton/RedirectButton";
import Dropdown from "../components/Menu/Dropdown/Dropdown";
const Home = () => {
    return (
        <div className="min-h-screen">
            <Dropdown>

            </Dropdown>
            <Banner/>
            <Container>
                <div className="w-[1000px] flex justify-around">
                    <RedirectButton text="Для него" image={man}/>
                    <RedirectButton text="Для нее" image={woman}/>
                </div>
            </Container>
        </div>
    );
}

export default Home;
