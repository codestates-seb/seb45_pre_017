import React, { useState } from "react";
import styled from "styled-components";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [generalErrorMessage, setGeneralErrorMessage] = useState("");

  const validateEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = e => {
    e.preventDefault(); // 기본 동작 막음
    // 이메일이 비어있을 경우
    if (email === "") {
      setIsLoginValid(false);
      setEmailErrorMessage("Email cannot be empty.");
      setPasswordErrorMessage("");
      setGeneralErrorMessage("");
      return;
    }

    // 비밀번호가 비어있을 경우
    if (password === "") {
      setIsLoginValid(false);
      setEmailErrorMessage("");
      setPasswordErrorMessage("Password cannot be empty.");
      setGeneralErrorMessage("");
      return;
    }

    // 이메일 유효성 검사
    if (!validateEmail(email)) {
      setIsLoginValid(false);
      setEmailErrorMessage("The email is not a valid email address.");
      setPasswordErrorMessage("");
      setGeneralErrorMessage("");
      return;
    }

    // 실제 로그인 로직
    if (email === "admin@example.com" && password === "password") {
      setIsLoginValid(true);
      setEmailErrorMessage("");
      setPasswordErrorMessage("");
      setGeneralErrorMessage("");
      console.log("Login successful");
    } else {
      setIsLoginValid(false);
      setEmailErrorMessage("");
      setPasswordErrorMessage("");
      setGeneralErrorMessage("The email or password is incorrect.");
      console.log("Login failed");
    }
  };

  return (
    <LoginForm>
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
    </LoginForm>
  );
};
export default LoginPage;

const LoginForm = styled.form`
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
