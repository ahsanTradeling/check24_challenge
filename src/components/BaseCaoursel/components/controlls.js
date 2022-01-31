import React, {useContext} from 'react';
import {CarouselContext} from "../../../context/carouselContext";
import styled from 'styled-components';

const Button = styled.div`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 5}px;
  right: ${props => props.side === 'next' && 5}px;
  font-size: 40px;
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  opacity: 0.5;
`;
function Buttons() {
    const {handleNext,handlePrevious} = useContext(CarouselContext);

    return (
        <>
            <Button side="prev" onClick={handlePrevious}>
                <i className="fa fa-angle-left"/>
            </Button>
            <Button side="next" onClick={handleNext} >
                <i className="fa fa-angle-right"/>
            </Button>
        </>
    );
}
export default Buttons;
