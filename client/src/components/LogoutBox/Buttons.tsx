import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const logoutButtonText: string = "Log out";
const cancelButtonText: string = "Cancel";

const Buttons = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  const handleCancel = () => {
    // 취소 버튼 클릭 시 메인 페이지로 이동
    navigate("/");
  };

  return (
    <Container>
      <LogoutButton onClick={handleLogout}>{logoutButtonText}</LogoutButton>
      <CancelButton onClick={handleCancel}>{cancelButtonText}</CancelButton>
    </Container>
  );
};

export default Buttons;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const LogoutButton = styled.button`
  font-size: 13px;
  width: 66px;
  height: 35px;
  border-radius: 0.3rem;
  background-color: #0a95ff;
  border: 1px solid #0a95ff;
  color: #ffffff;
`;

const CancelButton = styled(LogoutButton)`
  color: #0a95ff;
  background-color: #ffff;
  border: 1px solid #ffff;
`;
