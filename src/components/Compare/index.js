import React from 'react';
import styled from 'styled-components';
import data from '../../staticData/datatset.json';
import CompareItem from "../CompareItem";

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
`;

const Heading = styled.p`
`;

const ItemWrapper = styled.div`

`;


const Compare = () => {
        return (
            <Wrapper>
                <Heading>
                    Heading
                </Heading>
                <ItemWrapper>
                    {data.map((item,index) => {
                        return <CompareItem {...item} key={item.name + index}/>
                    })}
                </ItemWrapper>
            </Wrapper>
        );
    }
;

export default Compare;
