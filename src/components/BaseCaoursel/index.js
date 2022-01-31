import React, {useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {CarouselContext, CarouselProvider} from "../../context/carouselContext";
import Controls from "./components/controlls";


const Wrapper = styled.div`
  position: relative;
  width: 55%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;

const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.position}px)`};
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;


const BaseCarousel = ({data}) => {
    const {setContext,...state} = useContext(CarouselContext);
    const {position} = state;
    const carouselRef = useRef();
    console.log(useContext(CarouselContext))
    useEffect(() => {
        if (carouselRef.current) {
            const width = carouselRef.current.clientWidth;

            setContext({
                ...state,
                width : width,
                images: data
            });
        }
    }, [carouselRef]);

        return (

                <Wrapper>
                    <Slide position={position} ref={carouselRef}>
                        {data.map((img, i) => (
                            <Image src={img}  key={i}  alt={''}/>
                        ))}
                    </Slide>
                    <Controls
                    />
                </Wrapper>
        );
    }
;

export default BaseCarousel;
