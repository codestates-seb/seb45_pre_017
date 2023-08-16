import React, { useState } from "react";
import { styled } from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteForm = () => {
  const [value, setValue] = useState<string>("");

  return <TextWriteForm theme="snow" value={value} onChange={setValue} />;
};

const TextWriteForm = styled(ReactQuill)`
  height: 250px;
  margin-bottom: 20px;
`;

export default WriteForm;
