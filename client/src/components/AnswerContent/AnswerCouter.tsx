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

const Container = styled.div`
  margin-bottom: 8px;
  font-size: 19px;
`;
