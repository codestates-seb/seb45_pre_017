import React from "react";
import { styled } from "styled-components";
import LogoutBox from "../components/LogoutBox/Index";

const guideText: string = `Clicking “Log out” will log you out of the following
domains on this device:`;

const LogoutPage = () => {
  return (
    <TotalContainer>
      <Container>
        <MainContent>
          <GuideText>{guideText}</GuideText>
          <LogoutBox />
        </MainContent>
      </Container>
    </TotalContainer>
  );
};

export default LogoutPage;

const TotalContainer = styled.div`
  background-color: #f1f2f3;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.main`
  width: 526px;
  height: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideText = styled.section`
  font-size: 21px;
  color: #232629;
  text-align: center;
  white-space: pre-line;
  font-weight: 520;
  margin-bottom: 24px;
`;
