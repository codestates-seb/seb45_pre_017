import React from "react";
import { styled } from "styled-components";

import useGetComment from "../../hooks/useGetComment";
import { EditCommentButton, DeleteCommentButton } from "./AdditionalButton";

const Comment = () => {
  const userID: string = "1";
  const answerID: string = "21";

  const { commentData } = useGetComment(userID, answerID);

  return (
    <Container>
      {commentData.map(data => (
        <div key={data.commentId}>
          <Text>{data.content}</Text>
          <Writer>{`- ${data.name}`}</Writer>
          <Date>{data.commentDate}</Date>
          <AdditionalButton>
            <EditCommentButton />
            <DeleteCommentButton />
          </AdditionalButton>
        </div>
      ))}
    </Container>
  );
};

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
