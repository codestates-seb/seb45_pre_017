import React from "react";
import { styled } from "styled-components";

import useDleteComment from "../../hooks/useDeletComment";

const AddButtonText: string = "Add a comment";
const editButtonText: string = "Edit";
const deleteButtonText: string = "Delete";

// 임의의 값
const userId: string = "1";

// comment 추가
export const AddCommentButton = (props: AddProps) => {
  const { setWriteForm } = props;
  return <AddButton onClick={setWriteForm}>{AddButtonText}</AddButton>;
};

// comment 수정
export const EditCommentButton = (props: EditProps) => {
  const { commentID, setEditForm } = props;

  return (
    <EditButton onClick={() => setEditForm(commentID)}>
      {editButtonText}
    </EditButton>
  );
};

// comment 삭제
export const DeleteCommentButton = (props: DeleteProps) => {
  const { answerID, commentID } = props;
  const deleteComment = useDleteComment(userId, answerID, commentID);

  const deleteCommentEvent = () => {
    deleteComment.mutate();
  };

  return (
    <DeleteButton onClick={deleteCommentEvent}>{deleteButtonText}</DeleteButton>
  );
};

// type 정의
interface AddProps {
  setWriteForm: () => void;
}

interface EditProps {
  commentID: number;
  setEditForm: (commentID: number) => void;
}

interface DeleteProps {
  answerID: number;
  commentID: number;
}

// component 생성
const AddButton = styled.div`
  font-size: 13px;
  color: #838c95;
  padding-bottom: 16px;
`;

const EditButton = styled(AddButton)`
  margin-right: 8px;
`;

const DeleteButton = styled(AddButton)`
  margin-right: 8px;
`;
