import React from "react";
import { styled } from "styled-components";

import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar/Index";
import QuestionContentTitle from "../components/QuestionContentTitle/Index";
import QuestionContent from "../components/QuestionContent/Index";
import AnswerContent from "../components/AnswerContent/Index";
import AnswerWriteForm from "../components/AnswerWriteForm/Index";

const Title = QuestionContentTitle;

const QuestionContentPage = () => {
  return (
    <Body>
      <Header />
      <TotalContainer>
        <LeftSidebar />
        <MainContainer>
          <Title />
          <Content>
            <MainContent>
              <QuestionContent />
              <AnswerContent />
              <AnswerWriteForm />
            </MainContent>
            <RightSidebar />
          </Content>
        </MainContainer>
      </TotalContainer>
    </Body>
  );
};

export default QuestionContentPage;

const Body = styled.body`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

const MainContainer = styled.div`
  padding: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContent = styled.main`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
