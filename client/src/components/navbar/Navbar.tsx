import { useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../logic/redux/store/hooks";
import { RxAvatar } from "react-icons/rx";
import LogoutModal from "../sharedModal/components/logoutModal/LogoutModal";
import { setLoggedDetail, setLoggedIn } from "../../logic/redux/action/action";
import { Container } from "../../styles/sharedStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { decodeToken } from "../../utils/utils";
import { Paths } from "../../routes/path";

interface I_Props {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin }: I_Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  const [isLogoutModalOpen, setLogoutModalOpen] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    dispatch(setLoggedIn(false));
    dispatch(setLoggedDetail([]));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("expirationTime");
    if (token && expirationTime) {
      const decoded: any = decodeToken(String(token));
      const currentTime = Date.now();
      if (currentTime < Number(expirationTime)) {
        dispatch(setLoggedIn(true));
        dispatch(
          setLoggedDetail([
            {
              name: decoded?.decodedToken?.name,
              email: decoded?.decodedToken?.email,
            },
          ])
        );
      } else {
        handleLogout();
      }
    }
  }, [location]);

  return (
    <>
      <NavbarLayout>
        <Container>
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
                    borderColor="1px  solid #b269e8"
                    onClick={() => navigate(Paths.signIn)}
                  >
                    SIGN IN
                  </SignUpButton>
                  <SignUpButton
                    bgColor="#b269e8"
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
