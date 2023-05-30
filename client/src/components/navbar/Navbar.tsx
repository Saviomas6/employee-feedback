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
import { useAppDispatch, useAppSelector } from "../../logic/redux/store/hooks";
import { setSignIn, setSignUp } from "../../logic/redux/action/action";

const Navbar = () => {
  const isSignUpOpen = useAppSelector((state) => state.userReducer.signUp);
  const isSignInOpen = useAppSelector((state) => state.userReducer.signIn);

  const dispatch = useAppDispatch();

  const [isSignUpSuccessOpen, setSignUpSuccessOpen] = useState<boolean>(false);
  const [isSignUpLoading, setIsSignUpLoading] = useState<boolean>(false);

  return (
    <NavbarMainContainer>
      <StyledLink to={"/"}>
        <LogoMainContainer>
          <LogoContainer>
            <img src={rapid} />
          </LogoContainer>
          <NavbarContainer>EF System</NavbarContainer>
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
          onClick={() => dispatch(setSignIn(true))}
        >
          SIGN IN
        </SignUpButton>
        <SignUpButton
          bgColor="#b269e8"
          borderColor="transparent"
          onClick={() => dispatch(setSignUp(true))}
        >
          REGISTER
        </SignUpButton>
      </SignUpButtonWrapper>
      {isSignInOpen && <SignInModal />}
      {isSignUpOpen && (
        <SignUpModal
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
