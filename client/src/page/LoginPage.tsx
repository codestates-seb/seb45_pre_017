import React from "react";
import { styled } from "styled-components";
import Login from "../components/Login/index";

const LoginPage = () => {
  return (
    <Body>
      <Login />
    </Body>
  );
};

export default LoginPage;

const Body = styled.body`
  background-color: #f1f2f3;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 100vh;
`;
