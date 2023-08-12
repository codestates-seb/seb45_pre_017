import React from "react";
import { styled } from "styled-components";

import AskQuestionButton from "../AskQuestionButton/Index";
import AdditionalInfo from "./AdditionalInfo";

const duemmyTitle: string =
  "PySnmpError: poll error While trying to run Robot Framework test with Snmp-library";

const dummyName: string = "Asked";
const dummyInfo: string = "today";

const QuestionInquiryTitle = () => {
  return (
    <TotalContainer>
      <TitleContainer>
        <QuestionTitle>{duemmyTitle}</QuestionTitle>
        <AskQuestionButton />
      </TitleContainer>
      <InfoContainer>
        <AdditionalInfo infoName={dummyName} info={dummyInfo} />
      </InfoContainer>
    </TotalContainer>
  );
};

export default QuestionInquiryTitle;

const TotalContainer = styled.div`
  /* 반응형으로 전체 너비가 계속 변화함 -> 수정 필요 */
  width: 55vw;
  height: 44.438px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  height: 25px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e4e5e6;
`;

const QuestionTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px;
  font-size: 27px;
  font-weight: 400;
`;
