import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Header from "../components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url(" ${process.env.PUBLIC_URL} bg_dirt.jpg");
`;

const Container = styled.div`
  width: 1024px;
  position: relative;
  box-shadow: 0px 0px 12px 3px black;
`;

const Routing = () => {
    return (
        <Wrapper>
            <Container>
                <Router>
                    <Header/>
                    <Routes>
                        <Route exact path={'/'} element={<Home/>}/>
                    </Routes>
                </Router>
            </Container>
        </Wrapper>
    )
}

export default Routing;
