import './App.css';
import {Routes, Route} from "react-router";
import Home from "./pages/Home";
import Layout  from "./pages/Layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route exact path="/" element={<Home/>}/>
                    {/*<Route path="*" element={<NotFound/>}/>*/}
                </Route>
            </Routes>
        </>
    );
}

export default App;
