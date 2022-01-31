import React from 'react';
import styled from 'styled-components';
import './style.scss';



const Wrapper = styled.div`

`;

const Heading = styled.p`
`;


const CompareItem = ({rating}) => {
    console.log(rating)
        return (
            <div className="rated-stars">
                <div className="star-ratings-css" data-rate={rating}/>
            </div>
        );
    }
;

export default CompareItem;
