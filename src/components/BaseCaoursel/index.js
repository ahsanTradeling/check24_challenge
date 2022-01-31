import React, {useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {CarouselContext} from "../../context/carouselContext";
import Controls from "./components/controlls";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  width: 100%;
  height: 500px;
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
