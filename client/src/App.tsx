import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Mainpage from "./page/Mainpage";
import QuestionContentPage from "./page/QuestionContentPage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/page/:votes" element={<QuestionContentPage />} />
          </Routes>
        </Wrapper>
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

export default App;
