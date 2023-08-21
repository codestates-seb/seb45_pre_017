import React from "react";
import { styled } from "styled-components";
import LoginForm from "./LoginForm";
import OauthButton from "./OAuthButton";
import Logo from "../../asset/stack-overflow.png";

const Login = () => {
  return (
    <LoginContainer>
      <LogoBox>
        <LogoImg src={Logo} alt="logo" />
      </LogoBox>
      <OauthButton
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 25%;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const LogoImg = styled.img`
  display: flex;
  max-width: 60px;
  height: 60px;
`;
