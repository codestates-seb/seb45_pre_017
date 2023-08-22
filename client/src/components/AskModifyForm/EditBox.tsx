import React from "react";
import { styled } from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditBox = (props: any) => {
  const { data, EditBody } = props;
  return (
    <>
      <TextWriteForm theme="snow" value={data} onChange={e => EditBody(e)} />
    </>
  );
};

export default EditBox;

const TextWriteForm = styled(ReactQuill)`
  height: 200px;

  margin-top: 10px;
  margin-bottom: 60px;
`;
