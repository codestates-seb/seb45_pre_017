import React from "react";
import { styled } from "styled-components";

import { AnswerProps } from "../../models/ContentProps";

const text: string = "Answers";

const AnswerCounter = (props: OwnProps) => {
  const { answerData } = props;
  return (
    <Container>
      {answerData.length} {text}
    </Container>
  );
};

export default AnswerCounter;

interface OwnProps {
  answerData: AnswerProps[];
}

const Container = styled.h2`
  margin-bottom: 8px;
  font-size: 19px;
  font-weight: 400;
`;
