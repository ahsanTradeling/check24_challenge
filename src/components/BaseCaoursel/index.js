import React from 'react';
import styled from 'styled-components';
import {CarouselProvider} from "../../context/carouselContext";

const Wrapper = styled.div`

`;

const Slide = styled.div`

`;

const BaseCarousel = () => {
        return (
            <CarouselProvider>
                <Wrapper>
                    <Slide/>
                    {/*    TODO Base Carousel implemention*/}
                </Wrapper>
            </CarouselProvider>
        );
    }
;

export default BaseCarousel;
