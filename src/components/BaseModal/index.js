import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;


const Image = styled.img`
    width: 100%;
    height: 100%;
`;


const BaseModal = ({name,handleClose}) => {
        return (
                <Wrapper>
                    {name}
                </Wrapper>
        );
    }
;

export default BaseModal;
