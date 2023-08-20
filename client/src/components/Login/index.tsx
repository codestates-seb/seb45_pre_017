import React, { useState } from "react";
import styled from "styled-components";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setIsLoginValid(true);
      setLoginErrorMessage("");
      console.log("Login successful");
    } else {
      setIsLoginValid(false);
      setLoginErrorMessage("Invalid username or password.");
      console.log("Login failed");
    }
  };

  return (
    <LoginPageWrapper>
      <LoginForm>
        <FormField>
          <Label>Username</Label>
          <Input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormField>
        {!isLoginValid && <ErrorMessage>{loginErrorMessage}</ErrorMessage>}
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      </LoginForm>
    </LoginPageWrapper>
  );
};

export default LoginPage;

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const LoginForm = styled.form`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
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
