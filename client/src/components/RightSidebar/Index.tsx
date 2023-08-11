import React from "react";
import { styled } from "styled-components";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const RightSidebar = () => {
  return (
    <Sidebar>
      <FirstSection />
      <SecondSection />
    </Sidebar>
  );
};

export default RightSidebar;

const Sidebar = styled.aside`
  width: 298px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
