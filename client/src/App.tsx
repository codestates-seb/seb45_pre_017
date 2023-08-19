import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Mainpage from "./page/Mainpage";
import QuestionContentPage from "./page/QuestionContentPage";
import SignUpPage from "./page/SignUpPage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/page/1" element={<QuestionContentPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Wrapper>
        <FooterBox />
      </Router>
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

  width: 100vw;

  display: flex;
  justify-content: center;
`;

const FooterBox = styled(Footer)`
  position: relative;
  transform: translateY(-100%);
`;

export default App;
