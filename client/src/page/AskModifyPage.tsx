import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

import AskEditAside from "../components/AskEditAside/Index";
import AskModifyForm from "../components/AskModifyForm/Index";
import AskEditButton from "../components/AskEditButton/Index";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";

const pageTitle = "Ask a public question";
const api = "http://3.34.199.73:8080";

const AskModifyPage = () => {
  const userId = 9; //유저 정보를 로컬에 저장 후 사용할 지 결정하기

  const { postId } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    axios
      .get(`${api}/${userId}/posts/${postId}`)
      .then((res: any) => {
        setPostData({
          title: res.data.title,
          content: res.data.content,
        });
      })
      .catch(err => console.error(err));
  }, []);

  const PostData = (data: postDataType) => {
    setPostData(data);
  };

  const posting = async () => {
    try {
      await axios
        .patch(`${api}/${userId}/posts/${postId}`, postData)
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
        <ContentDiv>
          <LeftSidebar />
          <Body>
            <TitleSection>
              <PageTitle>{pageTitle}</PageTitle>
            </TitleSection>
            <ContentsSection>
              <EditSection>
                <AskModifyForm data={postData} PostData={PostData} />
                <AskEditButton posting={posting} />
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

interface postDataType {
  title: string;
  content: string;
}

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
