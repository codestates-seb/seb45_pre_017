import React from "react";
import { styled } from "styled-components";

import ContentVoteBar from "../ContentVoteBar/ContentVoteBar";
import ContentViewForm from "../ContentViewForm/Index";

const QuestionContent = () => {
  return (
    <Container>
      <ContentVoteBar />
      <ContentViewForm contentCategory="question" />
    </Container>
  );
};

export default QuestionContent;

const Container = styled.section`
  display: flex;
  flex-direction: row;
`;
