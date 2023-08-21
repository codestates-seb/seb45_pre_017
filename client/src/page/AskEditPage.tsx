import React from "react";
import { styled } from "styled-components";

import AskEditAdvice from "../components/AskEditAdvice/Index";
import AskEditAside from "../components/AskEditAside/Index";
import AskEditForm from "../components/AskEditForm/Index";
import AskEditButton from "../components/AskEditButton/Index";
import Footer from "../components/Footer";

const pageTitle = "Ask a public question";

const AskEditPage = () => {
  return (
    <>
      <AskContainer>
        <Body>
          <TitleSection>
            <PageTitle>{pageTitle}</PageTitle>
          </TitleSection>
          <ContentsSection>
            <EditSection>
              <AskEditAdvice />
              <AskEditForm />
              <AskEditButton />
            </EditSection>
            <AskEditAside />
          </ContentsSection>
          <Footer />
        </Body>
      </AskContainer>
    </>
  );
};

export default AskEditPage;

const AskContainer = styled.div`
  width: 100vw;

  background-color: #f8f9f9;

  padding: 30px 15px 15px 15px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const TitleSection = styled.section`
  width: 100%;
  max-width: 1020px;
  height: 80px;
`;

const PageTitle = styled.h1`
  font-size: 1.4rem;
`;

const ContentsSection = styled.section`
  display: flex;
  flex-direction: row;
`;

const EditSection = styled.section``;
