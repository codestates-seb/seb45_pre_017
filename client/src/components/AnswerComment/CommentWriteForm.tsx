import React from "react";
import { styled } from "styled-components";

const submitButtonText: string = "Submit";
const cancelButtonText: string = "Cancel";

const CommentWriteForm = (props: buttonProps) => {
  const { setWriteForm } = props;

  return (
    <WriteForm>
      <Textarea />
      <ButtonContainer>
        <SubmitButton>{submitButtonText}</SubmitButton>
        <CancelButton onClick={setWriteForm}>{cancelButtonText}</CancelButton>
      </ButtonContainer>
    </WriteForm>
  );
};

export default CommentWriteForm;

interface buttonProps {
  setWriteForm: () => void;
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
