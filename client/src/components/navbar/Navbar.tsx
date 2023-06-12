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
  ProfilePicContainer,
  LogoLayout,
  NavbarLayout,
} from "./style";
import rapid from "../../assets/rapid.svg";
import { useAppSelector } from "../../logic/redux/store/hooks";
import { RxAvatar } from "react-icons/rx";
import LogoutModal from "../sharedModal/components/logoutModal/LogoutModal";
import { Container } from "../../styles/sharedStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../routes/path";

interface I_Props {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin }: I_Props) => {
  const navigate = useNavigate();

  const location = useLocation();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );
  const [isLogoutModalOpen, setLogoutModalOpen] = useState<boolean>(false);

  return (
    <>
      <NavbarLayout>
        <Container>
          <NavbarMainContainer>
            <StyledLink to={Paths.home}>
              <LogoLayout>
                <LogoMainContainer>
                  <LogoContainer>
                    <img src={rapid} />
                  </LogoContainer>
                  <NavbarContainer>EF System</NavbarContainer>
                </LogoMainContainer>
                <NavTabs>
                  <NavTab
                    to={
                      isAdmin
                        ? "/admin-employee-feedback-topic"
                        : "/user-employee-feedback-topic"
                    }
                    pathTab={
                      location?.pathname === "/user-employee-feedback-topic" ||
                      location?.pathname === "/admin-employee-feedback-topic"
                    }
                  >
                    Employee Feedback
                  </NavTab>

                  <NavTab
                    to={
                      isAdmin
                        ? "/admin-announcement-topic"
                        : "/user-announcement-topic"
                    }
                    pathTab={
                      location?.pathname === "/admin-announcement-topic" ||
                      location?.pathname === "/user-announcement-topic"
                    }
                  >
                    HR Announcement
                  </NavTab>
                  <NavTab
                    to={
                      isAdmin
                        ? "/admin-project-feedback-topic"
                        : "/user-project-feedback-topic"
                    }
                    pathTab={
                      location?.pathname === "/admin-project-feedback-topic" ||
                      location?.pathname === "/user-project-feedback-topic"
                    }
                  >
                    Project Feedback
                  </NavTab>
                </NavTabs>
              </LogoLayout>
            </StyledLink>

            <SignUpButtonWrapper>
              {isLoggedIn && isLoggedDetail?.length !== 0 ? (
                <ProfilePicContainer onClick={() => setLogoutModalOpen(true)}>
                  <RxAvatar size="30" color="#fff" />
                </ProfilePicContainer>
              ) : (
                <>
                  <SignUpButton
                    bgColor="transparent"
                    borderColor="1px  solid #ff008e"
                    onClick={() => navigate(Paths.signIn)}
                  >
                    SIGN IN
                  </SignUpButton>
                  <SignUpButton
                    bgColor="#ff008e"
                    borderColor="transparent"
                    onClick={() => navigate(Paths.signUp)}
                  >
                    REGISTER
                  </SignUpButton>
                </>
              )}
            </SignUpButtonWrapper>

            {isLogoutModalOpen && (
              <LogoutModal setLogoutModalClose={setLogoutModalOpen} />
            )}
          </NavbarMainContainer>
        </Container>
      </NavbarLayout>
    </>
  );
};

export default Navbar;
