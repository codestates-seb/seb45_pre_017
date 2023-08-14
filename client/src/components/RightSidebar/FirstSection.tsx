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
    <div className="contentContainer">
      <FirstSectionTitle title={title} />
      {content.map(item => (
        <FirstSectionContent key={item.text} img={item.img} text={item.text} />
      ))}
    </div>
  );
};

const Content2 = () => {
  const { title, content } = secondDummy;

  return (
    <div className="contentContainer">
      <FirstSectionTitle title={title} />
      {content.map(item => (
        <FirstSectionContent key={item.text} img={item.img} text={item.text} />
      ))}
    </div>
  );
};

const SectionContainer = styled.section`
  background-color: #fdf7e1;
  border-left: 1px solid #ece5cc;
  border-right: 1px solid #ece5cc;
  border-bottom: 1px solid #ece5cc;
  border-radius: 0.2rem;
`;
