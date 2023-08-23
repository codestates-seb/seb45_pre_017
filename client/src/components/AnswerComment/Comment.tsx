import React, { useState } from "react";
import { styled } from "styled-components";

import useGetComment from "../../hooks/useGetComment";
import { EditCommentButton, DeleteCommentButton } from "./AdditionalButton";
import CommentEditForm from "./CommentEditForm";

const Comment = (props: OwnProps) => {
  const { answerID } = props;
  const userID: string = "1";

  const { commentData } = useGetComment(userID, answerID);
  const [editForm, setEditForm] = useState(0);

  const setEditFormEvent = (commentID: number) => {
    setEditForm(commentID);
  };

  if (commentData) {
    return (
      <Container>
        {commentData.map(data =>
          editForm !== data.commentId ? (
            <div key={data.commentId}>
              <Text>{data.content}</Text>
              <Writer>{`- ${data.name}`}</Writer>
              <Date>{data.commentDate}</Date>
              <AdditionalButton>
                <EditCommentButton
                  setEditForm={setEditFormEvent}
                  commentID={data.commentId}
                />
                <DeleteCommentButton
                  answerID={answerID}
                  commentID={data.commentId}
                />
              </AdditionalButton>
            </div>
          ) : (
            <CommentEditForm
              key={data.commentId}
              answerID={answerID}
              commentID={data.commentId}
              initailValue={data.content}
              setEditForm={setEditFormEvent}
            />
          ),
        )}
      </Container>
    );
  }

  return null;
};

interface OwnProps {
  answerID: number;
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
