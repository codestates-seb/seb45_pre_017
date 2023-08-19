import React from "react";
import { styled } from "styled-components";

const AddButtonText: string = "Add a comment";
const editButtonText: string = "Edit";
const deleteButtonText: string = "Delete";

export const AddCommentButton = (props: buttonProps) => {
  const { setWriteForm } = props;
  return <AddButton onClick={setWriteForm}>{AddButtonText}</AddButton>;
};

export const EditCommentButton = () => {
  return <EditButton>{editButtonText}</EditButton>;
};

export const DeleteCommentButton = () => {
  return <DeleteButton>{deleteButtonText}</DeleteButton>;
};

interface buttonProps {
  setWriteForm: () => void;
}

const AddButton = styled.div`
  font-size: 13px;
  color: #838c95;
  padding-bottom: 16px;
`;

const EditButton = styled(AddButton)`
  margin-right: 8px;
`;

const DeleteButton = styled(AddButton)`
  margin-right: 8px;
`;
