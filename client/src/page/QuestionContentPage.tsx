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
  const { isLoading, error } = useGetContent("votes", votes as string);

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
          {/* title 등 하부 컴포넌트에 parameter를 props로 전달
          -> 해당 parameter를 key 값으로 react-query 에서 서버 데이터를 가져옴 (현재 votes로 임의 설정)
            1) Title : 질문 제목, 작성 시간 
            2) QuestionContent : 질문 본문, 댓글 관련 데이터 
            3) AnswerContent : Question과 거의 동일 
            4) AnswerWriteForm : post 기능이 필요 
            */}
          <Title />
          <Content>
            <MainContent>
              <QuestionContent />
              <AnswerContent />
              {/** parameter 전달 테스트 */}
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
