import React from "react";
import { styled } from "styled-components";

import { EditCommentButton, DeleteCommentButton } from "./AdditionalButton";

const Comment = (props: CommentProps) => {
  const { text, writer, date } = props;
  return (
    <Container>
      <Text>{text}</Text>
      <Writer>{`- ${writer}`}</Writer>
      <Date>{date}</Date>
      <AdditionalButton>
        <EditCommentButton />
        <DeleteCommentButton />
      </AdditionalButton>
    </Container>
  );
};

interface CommentProps {
  text: string;
  writer: string;
  date: string;
}

const Container = styled.li`
  list-style: none;
  padding: 6px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 13px;
`;
const Text = styled.div`
  margin-bottom: 5px;
`;
const Writer = styled.span`
  color: #0a95ff;
  padding-right: 5px;
`;
const Date = styled.span`
  color: #838c95;
`;

const AdditionalButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #838c95;
`;

export default Comment;
