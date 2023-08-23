import React, { useState } from "react";
import { styled } from "styled-components";

import usePostAnswer from "../../hooks/usePostAnswer";
import WriteForm from "./WriteForm";

const title: string = "Your Answer";
const buttonText: string = "Post Your Answer";

const AnswerWriteForm = () => {
  const [value, setValue] = useState<string>("");

  const userID: string = "1";
  const postID: string = "1";
  const postMutation = usePostAnswer(userID, postID);

  const postAnswerToSever = () => {
    postMutation.mutate({ answerBody: value });
    setValue("");
  };

  return (
    <Container>
      <Title>{title}</Title>
      <WriteForm value={value} setValue={setValue} />
      <PostAnswerButton onClick={postAnswerToSever}>
        {buttonText}
      </PostAnswerButton>
    </Container>
  );
};

export default AnswerWriteForm;

const Container = styled.div`
  margin-right: 16px;
`;

const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 19px;
  font-weight: 400;
  padding-top: 20px;
  margin-bottom: 19px;
`;

const PostAnswerButton = styled.button`
  font-size: 13px;
  width: 126.906px;
  height: 35.781px;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 2px;
  margin-right: 2px;
  border-radius: 0.3rem;
  background-color: #0a95ff;
  border: 1px solid #0a95ff;
  color: #ffffff;
`;
