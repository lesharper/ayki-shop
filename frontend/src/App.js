import React from 'react';
import {Routes, Route} from "react-router"
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
