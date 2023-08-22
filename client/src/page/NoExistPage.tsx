import React from "react";
import { styled } from "styled-components";
import { ClimbingBoxLoader } from "react-spinners";

import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar/Index";

const indicatorText: string = "This page is under development...";

const NoExistPage = () => {
  return (
    <OuterContainer>
      <LeftSidebar />
      <InnerContainer>
        <IndicatorBox>
          <ClimbingBoxLoader size="70" color="#0a95ff" cssOverride={override} />
          <IndicatorText>{indicatorText}</IndicatorText>
        </IndicatorBox>
        <RightSidebar />
      </InnerContainer>
    </OuterContainer>
  );
};

export default NoExistPage;

const override = {
  display: "block",
  borderColor: "#E50915",
};

const OuterContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;

const InnerContainer = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: row;
`;

const IndicatorBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 250px;
`;

const IndicatorText = styled.div`
  font-size: 40px;
  color: #838c95;
`;
