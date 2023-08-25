import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import useDeleteQuestion from "../../hooks/useDeleteQuestion";
import useDeleteAnswer from "../../hooks/useDeleteAnswer";

const editButtonText: string = "Edit";
const deleteButtonText: string = "Delete";

const AdditonalButton = (props: OwnProps) => {
  const { userID, answerID, contentCategory } = props;

  // 임의의 값
  const postID: string = "3";
  console.log(contentCategory);
  const naviagte = useNavigate();

  const deleteQuestion = useDeleteQuestion(userID as number, postID);
  const deleteAnswer = useDeleteAnswer(
    userID as number,
    postID,
    answerID as number,
  );

  const deleteContentEvent = () => {
    if (contentCategory === "question") {
      deleteQuestion.mutate();
      naviagte("/");
    }
    if (contentCategory === "answer") {
      deleteAnswer.mutate();
    }
  };

  return (
    <Container>
      <EditButton>{editButtonText}</EditButton>
      <DeleteButton onClick={deleteContentEvent}>
        {deleteButtonText}
      </DeleteButton>
    </Container>
  );
};

export default AdditonalButton;

interface OwnProps {
  userID?: number;
  answerID?: number;
  contentCategory: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const EditButton = styled.div`
  font-size: 13px;
  color: #6a737c;
`;

const DeleteButton = styled.div`
  font-size: 13px;
  color: #6a737c;
`;
