import React from "react";
import { styled } from "styled-components";
import Community from "./Community";
import OauthButton from "./OauthButton";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <Signup>
      <LeftForm>
        <Community />
      </LeftForm>
      <RightForm>
        <OauthButton
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <SignUpForm />
      </RightForm>
    </Signup>
  );
};

export default SignUp;

const Signup = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

const LeftForm = styled.main`
  max-width: 50%;
`;

const RightForm = styled.main`
  width: 320px;
  max-width: 100%;
`;
