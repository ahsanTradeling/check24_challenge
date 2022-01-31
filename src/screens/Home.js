import React from 'react'
import BaseCarousel from "../components/BaseCaoursel";
import slide1 from "../assets/images/slide_1.jpg";
import slide2 from "../assets/images/slide_2.jpg";
import slide3 from "../assets/images/slide_3.jpg";
import CarouselProvider from "../context/carouselContext";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url(" ${process.env.PUBLIC_URL} bg_dirt.jpg");
`;

const Container = styled.div`
  width: 1024px;
`;

export default () => {
    const data = [slide1,slide2,slide3];
    return (
        <Wrapper>
            <Container>
                <CarouselProvider>
                    <BaseCarousel data={data}/>
                </CarouselProvider>
            </Container>
        </Wrapper>
    )
}
