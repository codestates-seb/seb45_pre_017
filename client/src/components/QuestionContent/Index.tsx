import React from "react";
import { styled } from "styled-components";

import useGetQuestion from "../../hooks/useGetQuestion";
import ContentViewForm from "../ContentViewForm/Index";

// dummyData
// import { dummyQuestion as content } from "./dummyQuestion";

const QuestionContent = () => {
  const userId: string = "1";
  const postID: string = "2";
  const { questionData } = useGetQuestion(userId, postID);
  // const { content, postDate, name } = questionData;

  return (
    <Container>
      <ContentViewForm
        contentCategory="question"
        questionContent={questionData}
      />
    </Container>
  );
};

export default QuestionContent;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  border-bottom: 0.1px solid #e4e5e6;
`;
