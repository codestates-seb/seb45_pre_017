import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar/Index";
import QuestionContentTitle from "../components/QuestionContentTitle/Index";
import QuestionContent from "../components/QuestionContent/Index";
import AnswerContent from "../components/AnswerContent/Index";
import AnswerWriteForm from "../components/AnswerWriteForm/Index";
import Footer from "../components/Footer";

// 서버 통신 테스트 (1)
import useGetContent from "../hooks/useGetContent";

const Title = QuestionContentTitle;

const QuestionContentPage = () => {
  // 서버 통신 테스트 (2)
  const { votes } = useParams();
  const { isLoading, error } = useGetContent(votes as string);

  const loadingIndicator = "Loading...";
  const errorIndicator = `Error: ${error}`;

  if (isLoading) {
    return <p>{loadingIndicator}</p>;
  }
  if (error) {
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
