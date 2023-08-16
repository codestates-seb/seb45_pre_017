import React from "react";
import { styled } from "styled-components";

// dummyData
import { dummyAnswer } from "./dummyAnswer";
const dummyCount: string[] = [dummyAnswer];

const text: string = "Answers";

const AnswerCounter = () => {
  return (
    <Container>
      {dummyCount.length} {text}
    </Container>
  );
};

export default AnswerCounter;

const Container = styled.h2`
  margin-bottom: 8px;
  font-size: 19px;
  font-weight: 400;
`;
