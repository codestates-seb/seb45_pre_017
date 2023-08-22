import React from "react";
import { styled } from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditBox = (props: any) => {
  return (
    <>
      <TextWriteForm theme="snow" onChange={e => props.EditBody(e)} />
    </>
  );
};

export default EditBox;

const TextWriteForm = styled(ReactQuill)`
  height: 200px;

  margin-top: 10px;
  margin-bottom: 60px;
`;
