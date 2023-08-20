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
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #f1f2f3;
`;
