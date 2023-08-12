import React from "react";
import { styled } from "styled-components";

import SecondSectionTitle from "./SecondSectionTitle";
import SecondSectionContent from "./SecondSectionContent";
import { secondSectionDummy as dummyData } from "./DummyData";

const SecondSection = () => {
  return (
    <SectionContainer>
      <SecondSectionTitle />
      {dummyData.map(item => (
        <SecondSectionContent
          key={item.brandName}
          img={item.img}
          brandName={item.brandName}
          followers={item.followers}
          description={item.description}
        />
      ))}
    </SectionContainer>
  );
};

export default SecondSection;

const SectionContainer = styled.section`
  border-top: 1px solid #d7d8d9;
  border-left: 1px solid #d7d8d9;
  border-right: 1px solid #d7d8d9;
  border-radius: 0.2rem;
`;
