import React from "react";
import { styled } from "styled-components";

import RightSidebar from "../components/RightSidebar/Index";
import QuestionContentTitle from "../components/QuestionContentTitle/Index";
import QuestionContent from "../components/QuestionContent/Index";
import AnswerContent from "../components/AnswerContent/Index";
import AnswerWriteForm from "../components/AnswerWriteForm/Index";

const Title = QuestionContentTitle;

const QuestionContentPage = () => {
  return (
    <body>
      {/* header 컴포넌트 */}
      <TotalContainer>
        {/* LeftSideBar Component */}
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
    </body>
  );
};

export default QuestionContentPage;

const TotalContainer = styled.div``;

const MainContainer = styled.div`
  width: 55vw;
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
