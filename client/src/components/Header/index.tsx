import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../asset/Header-logo.png";
import Search from "../../asset/Header-search.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <HeaderContainer>
      <Container>
        <Link to="/">
          <LogoBox>
            <LogoImg src={Logo} alt="logo" />
          </LogoBox>
        </Link>
        <InputWrap>
          <SearchImg src={Search} alt="search" />
          <form>
            <InputStyles type="text" placeholder="Search..." />
          </form>
        </InputWrap>
        <Nav>
          <li>
            {isLoggedIn ? (
              <Link to="users/logout">
                <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
              </Link>
            ) : (
              <Link to="/login">
                <LoginBtn onClick={handleLogin}>Login</LoginBtn>
              </Link>
            )}
          </li>
          <li>
            {isLoggedIn ? (
              <MyPageBtn>My Page</MyPageBtn>
            ) : (
              <Link to="/signup">
                <SignBtn>Sign Up</SignBtn>
              </Link>
            )}
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
  z-index: 100;
`;

const Container = styled.div`
  background: white;
  width: 80%;
  max-width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 150px;
  height: 30px;
  /* height: 70%; */
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
  display: flex;
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
`;

export const LoginBtn = styled.button`
  padding: 8px 10px;
  cursor: pointer;
  border: 1px solid #1567ff;
  border-radius: 3px;
  background-color: #b0deff;
  color: #399cff;
  font-weight: normal;
  width: 60px;
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
  width: 80px;
  &:hover {
    background-color: #0056f4;
  }
`;

export const LogoutBtn = styled.button`
  padding: 8px 10px;
  cursor: pointer;
  border: 1px solid #1567ff;
  border-radius: 3px;
  background-color: #b0deff;
  color: #399cff;
  font-weight: normal;
  width: 60px;
  &:hover {
    background-color: #73c4ff;
  }
`;

export const MyPageBtn = styled.button`
  padding: 8px 10px;
  cursor: pointer;
  border: 1px solid #1567ff;
  border-radius: 3px;
  background-color: #3179ff;
  color: #ffffff;
  font-weight: normal;
  width: 80px;
  &:hover {
    background-color: #0056f4;
  }
`;
