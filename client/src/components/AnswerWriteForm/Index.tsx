import React, { useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";

import WriteForm from "./WriteForm";

const title: string = "Your Answer";
const buttonText: string = "Post Your Answer";

// parameter 전달 테스트
import usePostAnswer from "../../hooks/usePostAnswer";

const AnswerWriteForm = () => {
  const { votes } = useParams();
  const [value, setValue] = useState<string>("");

  const postMutation = usePostAnswer("votes", votes as string);

  const postAnswerToSever = () => {
    postMutation.mutate({ value: value });
  };

  return (
    <Container>
      <Title>{title}</Title>
      {/* parameter 전달 테스트 */}
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
