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
  // ProfilePicContainer,
  LogoLayout,
} from "./style";
import rapid from "../../assets/rapid.svg";
import SignInModal from "../sharedModal/components/signInModal/SignInModal";
import SignUpModal from "../sharedModal/components/signUpModal/SignUpModal";
import SignUpSuccess from "../sharedModal/components/signUpSuccess/SignUpSuccess";
import { useAppDispatch, useAppSelector } from "../../logic/redux/store/hooks";

// import { RxAvatar } from "react-icons/rx";
import LogoutModal from "../sharedModal/components/logoutModal/LogoutModal";
import { setSignIn, setSignUp } from "../../logic/redux/action/action";
const Navbar = () => {
  const isSignUpOpen = useAppSelector((state) => state.userReducer.signUp);
  const isSignInOpen = useAppSelector((state) => state.userReducer.signIn);

  const dispatch = useAppDispatch();

  const [isSignUpSuccessOpen, setSignUpSuccessOpen] = useState<boolean>(false);
  const [isSignUpLoading, setIsSignUpLoading] = useState<boolean>(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState<boolean>(false);

  return (
    <NavbarMainContainer>
      <StyledLink to={"/"}>
        <LogoLayout>
          <LogoMainContainer>
            <LogoContainer>
              <img src={rapid} />
            </LogoContainer>
            <NavbarContainer>EF System</NavbarContainer>
          </LogoMainContainer>
          <NavTabs>
            <NavTab to={"/user"}>User</NavTab>
            <NavTab to={"/admin"}>Admin</NavTab>
          </NavTabs>
        </LogoLayout>
      </StyledLink>

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
        {/* <ProfilePicContainer onClick={() => setLogoutModalOpen(true)}>
          <RxAvatar size="30" color="#fff" />
        </ProfilePicContainer> */}
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
      {isLogoutModalOpen && (
        <LogoutModal setLogoutModalClose={setLogoutModalOpen} />
      )}
    </NavbarMainContainer>
  );
};

export default Navbar;
