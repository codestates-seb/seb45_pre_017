import React from "react";
import { styled } from "styled-components";

import AskQuestionButton from "../AskQuestionButton/Index";
import AdditionalInfo from "./AdditionalInfo";

// 추후 삭제할 dummyData
const dummyTitle: string =
  "Pure CSS to control horizontal dividers between displayed elements";
const dummyName: string = "Asked";
const dummyInfo: string = "today";

const QuestionContentTitle = () => {
  return (
    <div className="totalContainer">
      <TitleContainer>
        <Title>{dummyTitle}</Title>
        <AskQuestionButton />
      </TitleContainer>
      <InfoContainer>
        <AdditionalInfo infoName={dummyName} info={dummyInfo} />
      </InfoContainer>
    </div>
  );
};

export default QuestionContentTitle;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  height: 26px;
  padding-top: 8px;
  padding-bottom: 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e4e5e6;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px;
  font-size: 27px;
  font-weight: 400;
`;
