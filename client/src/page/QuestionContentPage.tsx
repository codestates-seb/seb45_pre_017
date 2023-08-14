import React from "react";
import { styled } from "styled-components";

import RightSidebar from "../components/RightSidebar/Index";
import QuestionContentTitle from "../components/QuestionContentTitle/Index";
import ContentViewForm from "../components/QuestionContent/ContentViewForm";
import AnswerWriteForm from "../components/QuestionContent/AnswerWriteForm";

const QuestionContentPage = () => {
  return (
    <body>
      {/* header 컴포넌트 */}
      <ContentContainer>
        {/* LeftSideBar Component */}
        <MainContainer>
          <QuestionContentTitle />
          <QuestionContent>
            <Main>
              <QuestionSection />
              {/* <AnswerSection /> */}
              <AnswerWriteForm />
            </Main>
            <RightSidebar />
          </QuestionContent>
        </MainContainer>
      </ContentContainer>
    </body>
  );
};

export default QuestionContentPage;

const ContentContainer = styled.div``;

const MainContainer = styled.div`
  width: 55vw;
`;

const QuestionContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.main`
  width: 70%;
`;

const QuestionSection = styled(ContentViewForm)``;
// const AnswerSection = styled(ContentViewForm)``;
