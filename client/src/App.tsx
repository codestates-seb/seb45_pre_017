import React from "react";
import styled from "styled-components";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <Wrapper>개발환경 셋팅 완료</Wrapper>
      <FooterBox />
    </>
  );
}

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 320px;
`;

const FooterBox = styled(Footer)`
  position: relative;
  transform: translateY(-100%);
`;

export default App;
