import React from "react";
import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";

interface OauthButtonProps {
  //기능 구현 해야함
  onClick: () => void;
}

const OauthButton: React.FC<OauthButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <FcGoogle size={20} />
      <ButtonText>Sign up with Google</ButtonText>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: 0.5px solid #ccc;
  margin-bottom: 20px;
  border-radius: 7px;
  padding: 10px;
  box-shadow: 0px 0.5px 15px rgba(163, 161, 161, 0.31);
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
    border-color: #999;
  }
`;

const ButtonText = styled.span`
  margin-left: 8px;
`;

export default OauthButton;
