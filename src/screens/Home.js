import React from 'react'
import BaseCarousel from "../components/BaseCaoursel";
import slide1 from "../assets/images/slide_1.jpg";
import slide2 from "../assets/images/slide_2.jpg";
import slide3 from "../assets/images/slide_3.jpg";
import CarouselProvider from "../context/carouselContext";
import styled from "styled-components";
import Compare from "../components/Compare";

const Wrapper = styled.div``;


export default () => {
    const data = [slide1,slide2,slide3];
    return (
        <Wrapper>
                <CarouselProvider>
                    <BaseCarousel data={data}/>
                </CarouselProvider>
            <Compare data={data}/>
        </Wrapper>
    )
}
