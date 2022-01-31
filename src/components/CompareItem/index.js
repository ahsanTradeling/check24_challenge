import React from 'react';
import styled from 'styled-components';
import data from '../../staticData/datatset.json';
import Ratings from "../Ratings";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  margin-bottom: 15px;
  box-shadow: 0px 0px 5px -1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 25px;
  border-radius: 6px;
`;

const Name = styled.h5`
  margin-left: 20px;
  width: 130px;
`;

const Types = styled.ul`
  display: flex;
  align-items: center;

  li {
    list-style: none;
    margin-right: 25px;

  }
`;

const Check = styled.i`
  color: green;
`;

const NotCheck = styled.i`
  color: red
`;

const AddressWrapper = styled.div`
=
`;
const AddressIcon = styled.i`
  color: black;
  margin-left: 10px;
`;

const CompareItem = ({rating, name, burger_classic, burger_cheese, burger_bio}) => {
        const returnType = (type) => {

            if (type === 'y') {
                return <Check className="fa fa-check"/>;
            } else {
                return <NotCheck className="fa fa-times"/>;
            }
        }
        return (
            <Wrapper>
                <Ratings rating={rating}/>
                <Name>{name}</Name>
                <Types>

                    <li>Classic burger {returnType(burger_classic)}</li>
                    <li>Cheese burger {returnType(burger_cheese)}</li>
                    <li>Bio {returnType(burger_bio)}</li>

                </Types>
                <AddressWrapper>
                    Adresse
                    <AddressIcon className="fa fa-map-marker"/>
                </AddressWrapper>
            </Wrapper>
        );
    }
;

export default CompareItem;
