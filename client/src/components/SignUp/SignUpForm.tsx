import React, { useState } from "react";
import { styled } from "styled-components";

const SignUpForm = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSignUp = () => {
    validateName(displayName);
    validateEmail(email);
    validatePassword(password);
    PasswordConfirmation(confirmPassword, password);

    // 회원가입 로직 수행 기능 구현해야함
  };

  //사용자 이름 유효성 검사
  const validateName = name => {
    if (name === "") {
      setIsNameValid(false);
      setNameErrorMessage("Please enter a valid display name.");
    } else {
      setIsNameValid(true);
      setNameErrorMessage("");
    }
  };

  //이메일 유효성 검사
  const validateEmail = email => {
    if (email === "") {
      setIsEmailValid(false);
      setEmailErrorMessage("Email cannot be empty.");
    } else if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      setEmailErrorMessage("Please enter a valid email address.");
    } else {
      setIsEmailValid(true);
      setEmailErrorMessage("");
    }
  };

  //비밀번호 유효성 검사
  const validatePassword = password => {
    if (!passwordRegex.test(password)) {
      setIsPasswordValid(false);
      if (password.length < 8) {
        setPasswordErrorMessage("Must contain at least 8 characters.");
      } else if (!/[A-Za-z]/.test(password)) {
        setPasswordErrorMessage("Please add at least one letter.");
      } else if (!/\d/.test(password)) {
        setPasswordErrorMessage("Please add at least one number.");
      }
    } else {
      setIsPasswordValid(true);
      setPasswordErrorMessage("");
    }
  };

  //비밀번호 일치 검사
  const PasswordConfirmation = (confirmPassword, password) => {
    if (password !== confirmPassword) {
      setIsConfirmPasswordValid(false);
      setConfirmPasswordErrorMessage("Passwords do not match.");
    } else {
      setIsConfirmPasswordValid(true);
      setConfirmPasswordErrorMessage("");
    }
  };
  return (
    <SignupForm>
      <FormContainer>
        <FormField>
          <Label>Display Name</Label>
          <Input
            type="text"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
          />
          {!isNameValid && <ErrorMessage>{nameErrorMessage}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {!isEmailValid && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {!isPasswordValid && (
            <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
          )}
        </FormField>
        <FormField>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          {!isConfirmPasswordValid && (
            <ErrorMessage>{confirmPasswordErrorMessage}</ErrorMessage>
          )}
          <PasswordMessage>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </PasswordMessage>
        </FormField>
        <FormSubmitButton onClick={handleSignUp}>Sign up</FormSubmitButton>
      </FormContainer>
    </SignupForm>
  );
};

export default SignUpForm;

const SignupForm = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  font-size: 13px;
  text-align: left;
  line-height: 17px;
  margin-bottom: 32px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 0.5rem;
  width: 80%;
`;

const FormField = styled.div`
  color: #000000;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  color: black;
  font-size: 15px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  color: #000000;
  border-radius: 7px;
  border-color: #ccc;
  border-width: 1px;
  padding: 0.5rem;
`;
const PasswordMessage = styled.p`
  font-size: 11px;
  margin-top: 10px;
  color: #6a737c;
`;

const ErrorMessage = styled.p`
  color: #d0393e;
  margin-top: 3px;
`;

const FormSubmitButton = styled.button`
  width: 100%;
  height: 32px;
  background-color: #0a95ff;
  color: #ffffff;
  border-radius: 7px;
  margin-top: 20px;
  border: none;
`;
