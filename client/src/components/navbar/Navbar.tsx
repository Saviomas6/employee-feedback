import { useState } from "react";
import * as Styled from "./style";
import rapid from "../../assets/rapid.svg";
import { useAppSelector } from "../../logic/redux/store/hooks";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoutModal from "../sharedModal/components/logoutModal/LogoutModal";
import { Container, SignUpButton } from "../../styles/sharedStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../routes/path";
import SideBar from "../sidebar/SideBar";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );
  const [isLogoutModalOpen, setLogoutModalOpen] = useState<boolean>(false);
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const getPathLocation = location.pathname.split("/")[1];

  return (
    <>
      <Styled.NavbarLayout>
        <Container width="90%">
          <Styled.NavbarMainContainer>
            <Styled.LogoLayout>
              <Styled.LogoMainContainer onClick={() => navigate(Paths.home)}>
                <Styled.LogoContainer>
                  <img src={rapid} />
                </Styled.LogoContainer>
                <Styled.NavbarContainer>EF System</Styled.NavbarContainer>
              </Styled.LogoMainContainer>
              <Styled.NavTabs>
                <Styled.NavTab
                  to={
                    isLoggedDetail[0]?.isAdmin
                      ? "/admin-employee-feedback-topic"
                      : "/user-employee-feedback-topic"
                  }
                  pathTab={
                    getPathLocation === "user-employee-feedback-topic" ||
                    getPathLocation === "admin-employee-feedback-topic"
                  }
                >
                  Employee Feedback
                </Styled.NavTab>

                <Styled.NavTab
                  to={
                    isLoggedDetail[0]?.isAdmin
                      ? "/admin-announcement-topic"
                      : "/user-announcement-topic"
                  }
                  pathTab={
                    getPathLocation === "admin-announcement-topic" ||
                    getPathLocation === "user-announcement-topic"
                  }
                >
                  HR Announcement
                </Styled.NavTab>
                <Styled.NavTab
                  to={
                    isLoggedDetail[0]?.isAdmin
                      ? "/admin-project-feedback-topic"
                      : "/user-project-feedback-topic"
                  }
                  pathTab={
                    getPathLocation === "admin-project-feedback-topic" ||
                    getPathLocation === "user-project-feedback-topic"
                  }
                >
                  Project Feedback
                </Styled.NavTab>
              </Styled.NavTabs>
            </Styled.LogoLayout>

            <Styled.SignUpButtonWrapper>
              {isLoggedIn && isLoggedDetail?.length !== 0 ? (
                <Styled.ProfilePicContainer
                  onClick={() => setLogoutModalOpen(true)}
                >
                  {isLoggedDetail[0]?.profileImage ? (
                    <img
                      src={isLoggedDetail[0]?.profileImage}
                      alt="img"
                      style={{
                        borderRadius: "100%",
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  ) : (
                    <RxAvatar size="30" color="#fff" />
                  )}
                </Styled.ProfilePicContainer>
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
            </Styled.SignUpButtonWrapper>
            <Styled.HamBuggerMenuContainer
              onClick={() => setSideBarOpen(!isSideBarOpen)}
            >
              <GiHamburgerMenu size={30} color="#fff" />
            </Styled.HamBuggerMenuContainer>

            <SideBar
              isSideBarOpen={isSideBarOpen}
              setSideBarOpen={setSideBarOpen}
            />

            {isLogoutModalOpen && (
              <LogoutModal setLogoutModalClose={setLogoutModalOpen} />
            )}
          </Styled.NavbarMainContainer>
        </Container>
      </Styled.NavbarLayout>
    </>
  );
};

export default Navbar;
