import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

import AskEditAdvice from "../components/AskEditAdvice/Index";
import AskEditAside from "../components/AskEditAside/Index";
import AskEditForm from "../components/AskEditForm/Index";
import AskEditButton from "../components/AskEditButton/Index";
import Footer from "../components/Footer";

const api = "http://3.34.199.73:8080";
const pageTitle = "Ask a public question";

const AskEditPage = () => {
  const userId = 8; //유저 정보를 로컬에 저장 후 사용할 지 결정하기

  const navigate = useNavigate();
  const [postData, setPostData] = useState({});

  const PostData = (data: postDataType) => {
    setPostData(data);
  };

  const posting = async () => {
    try {
      await axios
        .post(`${api}/${userId}/posts`, postData)
        .then((res: any) => {
          const path: string = `/posts/${res.data.postId}`;
          navigate(path);
        })
        .catch(err => console.error(err));
    } catch (err) {
      console.error(err);
    }
  };

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
              <AskEditForm PostData={PostData} />
              <AskEditButton posting={posting} />
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

interface postDataType {
  title: string;
  content: string;
}

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
