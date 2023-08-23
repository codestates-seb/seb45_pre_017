import React, { useState } from "react";
import { styled } from "styled-components";
import { registerUser } from "./RegisterUser";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSignUp = async () => {
    const { displayName, email, password, confirmPassword } = formData;

    validateName(displayName);
    validateEmail(email);
    validatePassword(password);
    validatePasswordConfirmation(confirmPassword, password);

    if (Object.values(errorMessages).every(message => message === "")) {
      try {
        const userData = await registerUser(displayName, email, password);
        console.log("User registered successfully:", userData);
        navigate("/login");
      } catch (error) {
        console.error("Registration error:", error);
        // 에러 처리를 수행할 수 있습니다.
      }
    } else {
      console.log("Registration failed due to validation errors.");
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prevState => ({ ...prevState, [field]: value }));
  };

  const validateName = name => {
    if (name === "") {
      setErrorMessages(prevState => ({
        ...prevState,
        displayName: "Please enter a valid display name.",
      }));
    } else {
      setErrorMessages(prevState => ({ ...prevState, displayName: "" }));
    }
  };

  const validateEmail = email => {
    if (email === "") {
      setErrorMessages(prevState => ({
        ...prevState,
        email: "Email cannot be empty.",
      }));
    } else if (!emailRegex.test(email)) {
      setErrorMessages(prevState => ({
        ...prevState,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrorMessages(prevState => ({ ...prevState, email: "" }));
    }
  };

  const validatePassword = password => {
    if (!passwordRegex.test(password)) {
      setErrorMessages(prevState => ({
        ...prevState,
        password: "Please enter a valid password.",
      }));
    } else {
      setErrorMessages(prevState => ({ ...prevState, password: "" }));
    }
  };

  const validatePasswordConfirmation = (confirmPassword, password) => {
    if (password !== confirmPassword) {
      setErrorMessages(prevState => ({
        ...prevState,
        confirmPassword: "Passwords do not match.",
      }));
    } else {
      setErrorMessages(prevState => ({ ...prevState, confirmPassword: "" }));
    }
  };

  return (
    <SignupForm>
      <FormContainer>
        <FormField>
          <Label>Display Name</Label>
          <Input
            type="text"
            value={formData.displayName}
            onChange={e => updateFormData("displayName", e.target.value)}
          />
          {errorMessages.displayName && (
            <ErrorMessage>{errorMessages.displayName}</ErrorMessage>
          )}
        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input
            type="text"
            value={formData.email}
            onChange={e => updateFormData("email", e.target.value)}
          />
          {errorMessages.email && (
            <ErrorMessage>{errorMessages.email}</ErrorMessage>
          )}
        </FormField>
        <FormField>
          <Label>Password</Label>
          <Input
            type="password"
            value={formData.password}
            onChange={e => updateFormData("password", e.target.value)}
          />
          {errorMessages.password && (
            <ErrorMessage>{errorMessages.password}</ErrorMessage>
          )}
        </FormField>
        <FormField>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            value={formData.confirmPassword}
            onChange={e => updateFormData("confirmPassword", e.target.value)}
          />
          {errorMessages.confirmPassword && (
            <ErrorMessage>{errorMessages.confirmPassword}</ErrorMessage>
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
