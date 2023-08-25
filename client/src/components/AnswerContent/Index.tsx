import React from "react";
import { styled } from "styled-components";

import useGetAnswer from "../../hooks/useGetAnswer";
import AnswerCounter from "./AnswerCounter";
import ContentViewForm from "../ContentViewForm/Index";
import AnswerComment from "../AnswerComment/Index";

const AnswerContent = () => {
  const userID: string = "1";
  const postID: string = "1";

  const { answerData } = useGetAnswer(userID, postID);

  if (answerData) {
    return (
      <Container>
        <AnswerCounter answerData={answerData} />
        {answerData.map((data: AnswerData) => (
          <ContentBox key={data.answerId}>
            <ContentViewForm contentCategory="answer" answerContent={data} />
            <AnswerComment answerID={data.answerId} />
          </ContentBox>
        ))}
      </Container>
    );
  }

  return null;
};

export default AnswerContent;

interface AnswerData {
  answerBody: string;
  answerDate: string;
  answerId: number;
  name: string;
  userId: number;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  gap: 10px;
`;

const ContentBox = styled.div`
  border-bottom: 0.1px solid #e4e5e6;
`;
