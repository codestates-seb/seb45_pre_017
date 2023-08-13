import React from "react";
import styled from "styled-components";
import Logo from "../../asset/Header-logo.png";
import Search from "../../asset/search.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <LogoBox>
          <LogoImg src={Logo} alt="logo" />
        </LogoBox>
        <InputWrap>
          <SearchImg src={Search} alt="search" />
          <form>
            <InputStyles type="text" placeholder="Search..." />
          </form>
        </InputWrap>
        <Nav>
          <li>
            <LoginBtn>Login</LoginBtn>
          </li>
          <li>
            <SignBtn>SignUp</SignBtn>
          </li>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background: white;
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  border-top: 3px solid #fe7214;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Container = styled.div`
  background: white;
  width: 80%;
  max-width: 100%;
  margin: 0 25px px 0 25px;
  height: 52px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
`;

export const LogoBox = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 70%;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-left: 15px;
  margin-right: 10px;
  width: 100%;
`;

export const SearchImg = styled.img`
  display: inline;
  position: absolute;
  top: 8px;
  left: 14px;
`;

export const InputStyles = styled.input`
  width: 100%;
  height: 80%;
  border: 1px solid #d1d1d3;
  outline: none;
  font-size: 18px;
  border-radius: 10px;
  line-height: 30px;
  padding: 5px 12px;
  padding-left: 45px;
  &:focus {
    border-color: #0969da;
    box-shadow: inset 0 0 0 1px #0969da;
    outline: none;
    /* box-shadow: 0 0 0 1px #1264a3, 0 0 0 5px rgba(29, 155, 209, 0.3); */
  }
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 5px;
  height: 100%;
  li {
    display: flex;
    align-items: center;
    margin-left: 4px;
    margin-right: 4px;
    .active {
      display: none;
    }
  }
  img {
    width: 33px;
    height: 30px;
  }
`;

export const LoginBtn = styled.button`
  padding: 8px 10px;
  cursor: pointer;
  border: 1px solid #1567ff;
  border-radius: 3px;
  background-color: #b0deff;
  color: #399cff;
  font-weight: normal;
  &:hover {
    background-color: #73c4ff;
  }
`;

export const SignBtn = styled.button`
  padding: 8px 10px;
  cursor: pointer;
  border: 1px solid #1567ff;
  border-radius: 3px;
  background-color: #3179ff;
  color: #ffffff;
  font-weight: normal;
  &:hover {
    background-color: #0056f4;
  }
`;
