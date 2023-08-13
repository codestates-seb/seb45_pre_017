import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>개발환경 셋팅 완료</Wrapper>
      <FooterBox />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
`;

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
