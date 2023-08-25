import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Mainpage from "./page/Mainpage";
import QuestionContentPage from "./page/QuestionContentPage";
import SignUpPage from "./page/SignUpPage";
import LoginPage from "./components/Login";
import LogoutPage from "./page/LogoutPage";
import AskEditPage from "./page/AskEditPage";
import AskModifyPage from "./page/AskModifyPage";
import NoExistPage from "./page/NoExistPage";
import AnswerModifyPage from "./page/AnswerModifyPage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/posts/1" element={<QuestionContentPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/users/logout" element={<LogoutPage />} />
            <Route path="/questions/ask" element={<AskEditPage />} />
            <Route
              path="/questions/modify/:postId"
              element={<AskModifyPage />}
            />
            <Route path="/noExist" element={<NoExistPage />} />
            <Route
              path="/answer/:postId/modify/:answerId"
              element={<AnswerModifyPage />}
            />
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
