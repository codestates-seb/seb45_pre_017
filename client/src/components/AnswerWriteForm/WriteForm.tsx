import React from "react";
import { styled } from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteForm = ({ value, setValue }: OwnProps) => {
  return <TextWriteForm theme="snow" value={value} onChange={setValue} />;
};

// type 정의
interface OwnProps {
  value: string;
  setValue: (value: string) => void;
}

// component 생성
const TextWriteForm = styled(ReactQuill)`
  height: 250px;
  margin-bottom: 20px;
`;

export default WriteForm;
