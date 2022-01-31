import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgb(0 0 0 / 50%);
  z-index: 1;
`;

const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    height: 80px;
    padding: 0;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 20px;
  }

  li {
    background-color: rgba(255 255 255 / 50%);
    margin: 0 20px 0px 0px;
    padding: 5px 15px;
    border-radius: 5px;
    border: 1px solid black;
    list-style: none;
    
    a{
      color:black;
      text-decoration: none;
    }
  }
}
`;


const Header = () => {
        return (
            <Wrapper>
                <Logo src={logo}/>
                <Nav>
                    <ul>
                        <li><a href="#">vergliech</a></li>
                        <li><a href="#">standorte</a></li>
                        <li><a href="#">impersum</a></li>
                    </ul>
                </Nav>
            </Wrapper>
        );
    }
;

export default Header;
