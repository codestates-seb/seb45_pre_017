import React from "react";
import { styled } from "styled-components";

const logoutButtonText: string = "Log out";
const cancelButtonText: string = "Cancel";

const Buttons = () => {
  return (
    <Container>
      <LogoutButton>{logoutButtonText}</LogoutButton>
      <CancelButton>{cancelButtonText}</CancelButton>
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
