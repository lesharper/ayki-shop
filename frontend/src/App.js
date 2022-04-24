import React, {useEffect} from 'react';
import {Routes, Route} from "react-router"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import {auth} from "./requests/user";
import {useSetRecoilState} from "recoil";
import {isAuth, userAtom} from "./store/atoms/user";
import Catalog from "./pages/Catalog";

const App = () => {

    const setUser = useSetRecoilState(userAtom)
    const setIsAuth = useSetRecoilState(isAuth)

    useEffect(() => {
        const check = async () => {
            const response = await auth()
            if (response.user) setUser(response.user)

            setIsAuth(response.isAuth)
        }

        check()
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/catalog/:query" element={<Catalog/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
