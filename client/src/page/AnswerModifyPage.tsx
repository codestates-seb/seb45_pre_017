import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

import AnswerModifyAside from "../components/AnswerModifyAside/Index";
import AnswerModifyForm from "../components/AnswerModifyForm/Index";
import AskEditButton from "../components/AskEditButton/Index";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";

const advice = [
  "Your edit will be placed in a queue until it is peer reviewed.",
  "We welcome edits that make the post easier to understand and more valuable for readers. Because community members review edits, please try to make the post substantially better than how you found it, for example, by fixing grammar or adding additional resources and hyperlinks.",
];
const pageTitle = "Answer";
const api = "http://3.34.199.73:8080";

const AnswerModifyPage = () => {
  const userId = 9; //유저 정보를 로컬에 저장 후 사용할 지 결정하기

  const { postId, answerId } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    axios
      .get(`${api}/${userId}/posts/${postId}/answers/${answerId}`)
      .then((res: any) => {
        console.log(res.data);
        setPostData({
          answerBody: res.data.answerBody,
        });
      })
      .catch(err => console.error(err));
  }, []);

  const PostData = (data: postDataType) => {
    setPostData(data);
    console.log(postData);
  };

  const posting = async () => {
    try {
      await axios
        .patch(`${api}/${userId}/posts/${postId}/answers/${answerId}`, postData)
        .then(() => {
          navigate(`/posts/${postId}`);
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
                <Advice>
                  {advice.map((a: string) => (
                    <>
                      <AdviceP>{a}</AdviceP>
                    </>
                  ))}
                </Advice>
                <AnswerModifyForm data={postData} PostData={PostData} />
                <AskEditButton posting={posting} />
              </EditSection>
              <AnswerModifyAside />
            </ContentsSection>
          </Body>
        </ContentDiv>
        <Footer />
      </AskContainer>
    </>
  );
};

export default AnswerModifyPage;

interface postDataType {
  title: string;
  content: string;
}

const AskContainer = styled.div`
  max-width: 1170px;

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

const Advice = styled.div`
  background-color: #fdf7e2;

  padding: 10px;

  border: 1px solid #e7cf79;
  border-radius: 5px;
`;

const AdviceP = styled.p`
  font-size: 0.8rem;

  margin: 10px;
`;

const Body = styled.div`
  padding: 30px 15px 15px 15px;

  display: flex;
  flex-direction: column;

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
