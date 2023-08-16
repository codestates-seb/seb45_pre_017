import React from "react";
import { styled } from "styled-components";

import ContentViewForm from "../ContentViewForm/Index";

// dummyData
import { dummyQuestion } from "./dummyQuestion";

const QuestionContent = () => {
  return (
    <Container>
      <ContentViewForm contentCategory="question" content={dummyQuestion} />
    </Container>
  );
};

export default QuestionContent;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  border-bottom: 0.1px solid #cccccf;
`;
