import React from "react";
import { styled } from "styled-components";

import useGetQuestion from "../../hooks/useGetQuestion";
import AskQuestionButton from "../AskQuestionButton/Index";
import AdditionalInfo from "./AdditionalInfo";

const dummyName: string = "Asked";

const QuestionContentTitle = () => {
  const userId: string = "1";
  const postID: string = "3";
  const { questionData } = useGetQuestion(userId, postID);
  const { title, postDate } = questionData;

  return (
    <div className="totalContainer">
      <TitleContainer>
        <Title>{title}</Title>
        <AskQuestionButton />
      </TitleContainer>
      <InfoContainer>
        <AdditionalInfo infoName={dummyName} info={postDate} />
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
