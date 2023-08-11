import React from "react";
import { styled } from "styled-components";

import FirstSectionTitle from "./FirstSectionTitle";
import FirstSectionContent from "./FirstSectionContent";
import { firstSectionDummy as dummyData } from "./DummyData";

const { firstDummy, secondDummy } = dummyData;

const FirstSection = () => {
  return (
    <SectionContainer>
      <Content1 />
      <Content2 />
    </SectionContainer>
  );
};

export default FirstSection;

const Content1 = () => {
  const { title, content } = firstDummy;

  return (
    <ContentContainer>
      <FirstSectionTitle title={title} />
      {content.map(item => (
        <FirstSectionContent key={item.text} img={item.img} text={item.text} />
      ))}
    </ContentContainer>
  );
};

const Content2 = () => {
  const { title, content } = secondDummy;

  return (
    <ContentContainer>
      <FirstSectionTitle title={title} />
      {content.map(item => (
        <FirstSectionContent key={item.text} img={item.img} text={item.text} />
      ))}
    </ContentContainer>
  );
};

const SectionContainer = styled.section`
  width: 298px;
  height: 400px;
`;

const ContentContainer = styled.div``;
