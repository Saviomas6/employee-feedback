import { useState } from "react";
import {
  NavbarContainer,
  NavbarMainContainer,
  SignUpButton,
  SignUpButtonWrapper,
  LogoContainer,
  LogoMainContainer,
  NavTabs,
  NavTab,
  StyledLink,
} from "./style";
import rapid from "../../assets/rapid.svg";
import SignInModal from "../sharedModal/components/signInModal/SignInModal";
import SignUpModal from "../sharedModal/components/signUpModal/SignUpModal";
import SignUpSuccess from "../sharedModal/components/signUpSuccess/SignUpSuccess";

const Navbar = () => {
  const [isSignUpOpen, setSignUpOpen] = useState<boolean>(false);
  const [isSignInOpen, setSignInOpen] = useState<boolean>(false);
  const [isSignUpSuccessOpen, setSignUpSuccessOpen] = useState<boolean>(false);
  const [isSignUpLoading, setIsSignUpLoading] = useState<boolean>(false);

  return (
    <NavbarMainContainer>
      <StyledLink to={"/"}>
        <LogoMainContainer>
          <LogoContainer>
            <img src={rapid} />
          </LogoContainer>
          <NavbarContainer>Employee Feedback System</NavbarContainer>
        </LogoMainContainer>
      </StyledLink>

      <NavTabs>
        <NavTab to={"/user"}>User</NavTab>
        <NavTab to={"/admin"}>Admin</NavTab>
      </NavTabs>
      <SignUpButtonWrapper>
        <SignUpButton
          bgColor="transparent"
          borderColor="1px  solid #b269e8"
          onClick={() => setSignInOpen(true)}
        >
          SIGN IN
        </SignUpButton>
        <SignUpButton
          bgColor="#b269e8"
          borderColor="transparent"
          onClick={() => setSignUpOpen(true)}
        >
          REGISTER
        </SignUpButton>
      </SignUpButtonWrapper>
      {isSignInOpen && <SignInModal setSignInOpen={setSignInOpen} />}
      {isSignUpOpen && (
        <SignUpModal
          setSignUpOpen={setSignUpOpen}
          setIsSignUpLoading={setIsSignUpLoading}
          setSignUpSuccessModal={setSignUpSuccessOpen}
        />
      )}

      {isSignUpSuccessOpen && (
        <SignUpSuccess
          setSignUpSuccessModal={setSignUpSuccessOpen}
          isLoading={isSignUpLoading}
        />
      )}
    </NavbarMainContainer>
  );
};

export default Navbar;
