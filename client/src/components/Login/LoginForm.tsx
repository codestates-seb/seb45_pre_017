import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login } from "./LoginUser";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [generalErrorMessage, setGeneralErrorMessage] = useState("");

  const validateEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async e => {
    e.preventDefault(); // 기본 동작 막음
    const loginSuccess = await login(email, password);

    if (loginSuccess) {
      const response = await fetch("/users/login");
      const data = await response.json();
      const receivedJwtToken = data.jwt_token;
      localStorage.setItem("jwtToken", receivedJwtToken);

      navigate("/");
    } else {
      setIsLoginValid(false);
      setEmailErrorMessage("");
      setPasswordErrorMessage("");
      setGeneralErrorMessage("");

      // 이메일이 비어있을 경우
      if (email === "") {
        setEmailErrorMessage("Email cannot be empty.");
        return;
      }

      // 비밀번호가 비어있을 경우
      if (password === "") {
        setPasswordErrorMessage("Password cannot be empty.");
        return;
      }

      // 이메일 유효성 검사
      if (!validateEmail(email)) {
        setEmailErrorMessage("The email is not a valid email address.");
        return;
      }

      // 이메일과 비밀번호가 모두 유효하지 않을 때 일반 에러 메시지 설정
      if (!emailErrorMessage && !passwordErrorMessage) {
        setGeneralErrorMessage("Invalid email or password.");
      }
    }
  };

  return (
    <LoginContainer>
      <FormField>
        <Label>Email</Label>
        <Input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {!isLoginValid && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
      </FormField>
      <FormField>
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {!isLoginValid && <ErrorMessage>{passwordErrorMessage}</ErrorMessage>}
        {!isLoginValid && <ErrorMessage>{generalErrorMessage}</ErrorMessage>}
      </FormField>
      <LoginButton onClick={handleLogin}>Login</LoginButton>
    </LoginContainer>
  );
};
export default LoginForm;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  padding: 30px;
  background-color: #ffff;
  box-shadow: 0px 0.5px 15px rgba(163, 161, 161, 0.31);
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: #d0393e;
  font-size: 14px;
  margin-top: 5px;
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
