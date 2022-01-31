import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Header from "../components/Header";

const Routing = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default Routing;
