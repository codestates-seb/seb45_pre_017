import React from "react";
import { styled } from "styled-components";
import SignUp from "../components/SignUp/index";

const SignUpPage = () => {
  return (
    <Body>
      <SignUp />
    </Body>
  );
};

export default SignUpPage;

const Body = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f1f2f3;
`;
