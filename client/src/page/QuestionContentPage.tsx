import React from "react";
import { styled } from "styled-components";

import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar/Index";
import QuestionContentTitle from "../components/QuestionContentTitle/Index";
import QuestionContent from "../components/QuestionContent/Index";
import AnswerContent from "../components/AnswerContent/Index";
import AnswerWriteForm from "../components/AnswerWriteForm/Index";
import Footer from "../components/Footer";

import useGetQuestion from "../hooks/useGetQuestion";

const Title = QuestionContentTitle;

const QuestionContentPage = () => {
  const userId: string = "1";
  const postID: string = "3";

  const { questionLoad, questionError } = useGetQuestion(userId, postID);

  const loadingIndicator = "Loading...";
  const errorIndicator = `Error`;

  if (questionLoad) {
    return <p>{loadingIndicator}</p>;
  }
  if (questionError) {
    return <p>{errorIndicator}</p>;
  }

  return (
    <TotalContainer>
      <OveralContainer>
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
      </OveralContainer>
      <Footer />
    </TotalContainer>
  );
};

export default QuestionContentPage;

const TotalContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OveralContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

const MainContainer = styled.div`
  width: 100%;
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
