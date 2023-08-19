import React, { useState } from "react";
import { styled } from "styled-components";

import Comment from "./Comment";
import { AddCommentButton } from "./AdditionalButton";
import CommentWriteForm from "./CommentWriteForm";

// dummyData
const dummyText: string =
  "Ali hocam, Bunun bi çaresini bulabildin mi. Ben de aynı dertten muzdaribim.";
const dummyWriter: string = "Mahmut EFE";
const dummyDate: string = "Jul 20, 2015 at 15:52";

const AnswerComment = () => {
  const [writeForm, setWriteForm] = useState<boolean>(false);

  const setWriteFormEvent = () => {
    setWriteForm(!writeForm);
  };

  return (
    <Container>
      <CommentList>
        <Comment text={dummyText} writer={dummyWriter} date={dummyDate} />
      </CommentList>
      {!writeForm ? (
        <AddCommentButton setWriteForm={setWriteFormEvent} />
      ) : (
        <CommentWriteForm setWriteForm={setWriteFormEvent} />
      )}
    </Container>
  );
};

export default AnswerComment;

const Container = styled.div`
  margin-left: 60.797px;
`;

const CommentList = styled.ul`
  border-top: 0.1px solid #cccccf;
`;
