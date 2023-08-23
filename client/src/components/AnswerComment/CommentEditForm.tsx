import React, { useState } from "react";
import { styled } from "styled-components";

const submitButtonText: string = "Submit";
const cancelButtonText: string = "Cancel";

const CommentEditForm = (props: OwnProps) => {
  const { setEditForm, answerID } = props;

  console.log(answerID);

  //   const userID: string = "1";

  const [value, setValue] = useState("");

  const textChangeEvent = e => {
    setValue(e.target.value);
  };

  const commentSubmitEvent = () => {
    setEditForm();
  };

  return (
    <WriteForm>
      <Textarea value={value} onChange={textChangeEvent} />
      <ButtonContainer>
        <SubmitButton onClick={commentSubmitEvent}>
          {submitButtonText}
        </SubmitButton>
        <CancelButton onClick={setEditForm}>{cancelButtonText}</CancelButton>
      </ButtonContainer>
    </WriteForm>
  );
};

export default CommentEditForm;

interface OwnProps {
  setEditForm: () => void;
  answerID: number;
}

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
