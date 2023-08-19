import React from "react";
import { styled } from "styled-components";

import AnswerCounter from "./AnswerCounter";
import ContentViewForm from "../ContentViewForm/Index";
import AnswerComment from "../AnswerComment/Index";

// dummyData
import { dummyAnswer } from "./dummyAnswer";

const AnswerContent = () => {
  return (
    <Container>
      <AnswerCounter />
      <ContentViewForm contentCategory="answer" content={dummyAnswer} />
      <AnswerComment />
    </Container>
  );
};

export default AnswerContent;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  border-bottom: 0.1px solid #cccccf;
  gap: 10px;
`;
