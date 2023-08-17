import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import QuestionContentPage from "./page/QuestionContentPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <QuestionContentPage />
      </Wrapper>
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
  position: relative; /* Added position */
  display: flex;
`;

const FooterBox = styled(Footer)`
  position: relative;
  transform: translateY(-100%);
`;

export default App;
