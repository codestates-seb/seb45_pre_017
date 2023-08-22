import React from "react";
import { styled } from "styled-components";

import AskEditAside from "../components/AskEditAside/Index";
import AskEditForm from "../components/AskEditForm/Index";
import AskEditButton from "../components/AskEditButton/Index";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";

const pageTitle = "Ask a public question";

const AskModifyPage = () => {
  return (
    <>
      <AskContainer>
        <ContentDiv>
          <LeftSidebar />
          <Body>
            <TitleSection>
              <PageTitle>{pageTitle}</PageTitle>
            </TitleSection>
            <ContentsSection>
              <EditSection>
                <AskEditForm />
                <AskEditButton />
              </EditSection>
              <AskEditAside />
            </ContentsSection>
          </Body>
        </ContentDiv>
        <Footer />
      </AskContainer>
    </>
  );
};

export default AskModifyPage;

const AskContainer = styled.div`
  background-color: #f8f9f9;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: center;
`;

const Body = styled.div`
  padding: 30px 15px 15px 15px;

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

const EditSection = styled.section`
  margin-top: -20px;
`;
