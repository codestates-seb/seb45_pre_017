import React from "react";
import { styled } from "styled-components";

const buttonText = "Add a comment";
const editButtonText: string = "Edit";
const deleteButtonText: string = "Delete";

// dummyData
const dummyText: string =
  "Ali hocam, Bunun bi çaresini bulabildin mi. Ben de aynı dertten muzdaribim.";
const dummyWriter: string = "Mahmut EFE";
const dummyDate: string = "Jul 20, 2015 at 15:52";

const Comment = () => {
  return (
    <div className="container">
      <CommentList>
        <Content text={dummyText} writer={dummyWriter} date={dummyDate} />
      </CommentList>
      <AddCommentButton>{buttonText}</AddCommentButton>
    </div>
  );
};

export default Comment;

const Content = (props: CommentProps) => {
  const { text, writer, date } = props;
  return (
    <Container>
      <Text>{text}</Text>
      <Writer>- {writer}</Writer>
      <Date>{date}</Date>
      <AdditionalButton>
        <EditButton>{editButtonText}</EditButton>
        <DeleteButton>{deleteButtonText}</DeleteButton>
      </AdditionalButton>
    </Container>
  );
};

interface CommentProps {
  text: string;
  writer: string;
  date: string;
}

const CommentList = styled.ul`
  margin-top: 12px;
  margin-bottom: 12px;
  border-top: 0.1px solid #cccccf;
`;

const Container = styled.div`
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

const AddCommentButton = styled.div`
  font-size: 13px;
  color: #838c95;
  padding-bottom: 16px;
`;

const AdditionalButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #838c95;
`;

const EditButton = styled.div`
  font-size: 13px;
  color: #838c95;
  margin-right: 8px;
`;

const DeleteButton = styled.div`
  font-size: 13px;
  color: #838c95;
  margin-right: 8px;
`;
