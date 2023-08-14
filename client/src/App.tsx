import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Wrapper></Wrapper>
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
