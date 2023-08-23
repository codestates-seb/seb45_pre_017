import React, { useState } from "react";
import { styled } from "styled-components";

import usePatchComment from "../../hooks/usePatchComment";

const submitButtonText: string = "Submit";
const cancelButtonText: string = "Cancel";

const CommentEditForm = (props: OwnProps) => {
  const { answerID, commentID, initailValue, setEditForm } = props;

  const userID: string = "1";

  const patchComment = usePatchComment(userID, answerID, commentID);
  const [value, setValue] = useState(initailValue);

  const textChangeEvent = e => {
    setValue(e.target.value);
  };

  const commentSubmitEvent = () => {
    patchComment.mutate({ content: value });
    setEditForm(0);
  };

  const closeEditFormEvent = () => {
    setEditForm(0);
  };

  return (
    <WriteForm>
      <Textarea value={value} onChange={textChangeEvent} />
      <ButtonContainer>
        <SubmitButton onClick={commentSubmitEvent}>
          {submitButtonText}
        </SubmitButton>
        <CancelButton onClick={closeEditFormEvent}>
          {cancelButtonText}
        </CancelButton>
      </ButtonContainer>
    </WriteForm>
  );
};

export default CommentEditForm;

// type 선언
interface OwnProps {
  answerID: number;
  commentID: number;
  initailValue: string;
  setEditForm: (commentID: number) => void;
}

// component 생성
const WriteForm = styled.form`
  margin-right: 8px;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SubmitButton = styled.span`
  font-size: 13px;
  color: #838c95;
  padding-bottom: 16px;
  margin-right: 8px;
`;

const CancelButton = styled(SubmitButton)``;
