import React, { useState } from "react";
import { styled } from "styled-components";

import { title, body, tags } from "./dummyForm";
import EditBox from "./EditBox";

const AskModifyForm = (props: any) => {
  const { data, PostData } = props;
  const [editTitle, setEditTitle] = useState<string>(data.title);
  const [editBody, setEditBody] = useState<string>(data.content);

  const EditTitle = (e: any) => {
    setEditTitle(e.target.value);

    PostData({
      title: editTitle,
      content: editBody,
    });
  };

  const EditBody = (e: any) => {
    setEditBody(e);

    PostData({
      title: editTitle,
      content: editBody,
    });
  };

  return (
    <>
      <FormContainer>
        <Section className="TitleSection">
          <Title>{title.title}</Title>
          <SubTitle>{title.subTitle}</SubTitle>
          <Input
            className="TitleInput"
            placeholder={title.contents}
            defaultValue={data.title}
            onChange={e => EditTitle(e)}
          />
        </Section>
        <Section className="BodySection">
          <Title>{body.title}</Title>
          <SubTitle>{body.subTitle}</SubTitle>
          <EditBox data={data.content} EditBody={EditBody} />
        </Section>
        <Section className="TagsSection">
          <Title>{tags.title}</Title>
          <SubTitle>{tags.subTitle}</SubTitle>
          <Input className="TagsInput" placeholder={tags.contents} />
        </Section>
      </FormContainer>
    </>
  );
};

export default AskModifyForm;

const FormContainer = styled.div`
  background-color: white;

  margin-top: 20px;

  padding: 35px 35px 20px 35px;

  border: 1px solid #e4e5e7;
  border-radius: 5px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;

  margin-top: 7px;

  padding: 7px;

  border: 1px solid #c7cbcf;
  border-radius: 5px;
`;

const Title = styled.h5`
  margin-bottom: 3px;
`;

const SubTitle = styled.p`
  font-size: 0.8rem;
`;
