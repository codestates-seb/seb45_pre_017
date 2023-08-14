import React from "react";
import { styled } from "styled-components";

import EditButton from "./EditButton";
import WriterInfo from "./WriterInfo";

import { ContentCategory } from "../../models/ContentCategory";

// dummyData
import { dummyQuestion } from "./dummyData";

const ContentViewForm = (props: ContentCategory) => {
  const { contentCategory } = props;
  return (
    <Container>
      <MainContent>{dummyQuestion}</MainContent>
      <AssistantContent>
        <EditButton />
        <WriterInfo contentCategory={contentCategory} />
      </AssistantContent>
    </Container>
  );
};

export default ContentViewForm;

const Container = styled.div`
  padding-right: 16px;
`;

const MainContent = styled.div`
  padding-right: 16px;
  font-size: 15px;
`;

const AssistantContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`;
