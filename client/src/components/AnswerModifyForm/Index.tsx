import React, { useState } from "react";
import { styled } from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AnswerModifyForm = (props: any) => {
  const { data, PostData } = props;
  const [editBody, setEditBody] = useState<string>(data.content);

  const EditBody = (e: any) => {
    setEditBody(e);

    PostData({
      answerBody: editBody,
    });
  };

  return (
    <>
      <FormContainer>
        <TextWriteForm
          theme="snow"
          value={data.answerBody}
          onChange={e => EditBody(e)}
        />
      </FormContainer>
    </>
  );
};

export default AnswerModifyForm;

const FormContainer = styled.div`
  background-color: white;

  margin-top: 20px;

  padding: 35px 35px 20px 35px;

  border: 1px solid #e4e5e7;
  border-radius: 5px;
`;

const TextWriteForm = styled(ReactQuill)`
  height: 200px;

  margin-top: 10px;
  margin-bottom: 60px;
`;
