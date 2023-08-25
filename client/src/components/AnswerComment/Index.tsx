import React, { useState } from "react";
import { styled } from "styled-components";

import Comment from "./Comment";
import { AddCommentButton } from "./AdditionalButton";
import CommentWriteForm from "./CommentWriteForm";

const AnswerComment = ({ answerID }: { answerID: number }) => {
  const [writeForm, setWriteForm] = useState<boolean>(false);

  const setWriteFormEvent = () => {
    setWriteForm(!writeForm);
  };

  return (
    <Container>
      <CommentList>
        <Comment answerID={answerID} />
      </CommentList>
      {!writeForm ? (
        <AddCommentButton setWriteForm={setWriteFormEvent} />
      ) : (
        <CommentWriteForm
          setWriteForm={setWriteFormEvent}
          answerID={answerID}
        />
      )}
    </Container>
  );
};

export default AnswerComment;

const Container = styled.div`
  margin-left: 60.797px;
`;

const CommentList = styled.ul`
  border-top: 0.1px solid #e4e5e6;
`;
