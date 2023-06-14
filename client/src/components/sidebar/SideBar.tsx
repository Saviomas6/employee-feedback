import * as Styled from "./style";
import { IoCloseSharp } from "react-icons/io5";
import rapid from "../../assets/rapid.svg";
import { useAppDispatch, useAppSelector } from "../../logic/redux/store/hooks";
import { SignUpButton } from "../../styles/sharedStyles";
import { Paths } from "../../routes/path";
import { useNavigate } from "react-router-dom";
import { setLoggedIn } from "../../logic/redux/action/action";

interface I_Props {
  isSideBarOpen: boolean;
  setSideBarOpen(value: boolean): void;
}

const SideBar = ({ isSideBarOpen, setSideBarOpen }: I_Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    dispatch(setLoggedIn(false));
    setSideBarOpen(false);
    navigate(Paths.home);
  };

  return (
    <Styled.SideBarMainContainer isSideBarOpen={isSideBarOpen}>
      <Styled.SideBarContainer>
        <Styled.SideBarLogoContainer>
          <Styled.SideBarLogoIconContainer>
            <Styled.SideBarLogoIcon>
              <img src={rapid} alt="rapid" />
            </Styled.SideBarLogoIcon>
            <Styled.SideBarLogoHeading>EF System</Styled.SideBarLogoHeading>
          </Styled.SideBarLogoIconContainer>
          <Styled.SideBarCloseIcon
            onClick={() => setSideBarOpen(!isSideBarOpen)}
          >
            <IoCloseSharp size={30} color="#fff" />
          </Styled.SideBarCloseIcon>
        </Styled.SideBarLogoContainer>
        <Styled.SideBarNavTabs>
          <Styled.SideBarNavTab
            onClick={() => {
              navigate(
                isLoggedDetail[0]?.isAdmin
                  ? "/admin-employee-feedback-topic"
                  : "/user-employee-feedback-topic"
              );
              setSideBarOpen(!isSideBarOpen);
            }}
          >
            Employee Feedback
          </Styled.SideBarNavTab>
          <Styled.SideBarNavTab
            onClick={() => {
              navigate(
                isLoggedDetail[0]?.isAdmin
                  ? "/admin-announcement-topic"
                  : "/user-announcement-topic"
              );
              setSideBarOpen(!isSideBarOpen);
            }}
          >
            HR Announcement
          </Styled.SideBarNavTab>
          <Styled.SideBarNavTab
            onClick={() => {
              navigate(
                isLoggedDetail[0]?.isAdmin
                  ? "/admin-project-feedback-topic"
                  : "/user-project-feedback-topic"
              );
              setSideBarOpen(!isSideBarOpen);
            }}
          >
            Project Feedback
          </Styled.SideBarNavTab>
        </Styled.SideBarNavTabs>
        <Styled.SideBarButtonWrapper>
          {isLoggedIn && isLoggedDetail?.length !== 0 ? (
            <SignUpButton
              bgColor="#ff008e"
              borderColor="transparent"
              onClick={handleLogout}
            >
              LOGOUT
            </SignUpButton>
          ) : (
            <>
              <SignUpButton
                bgColor="transparent"
                borderColor="1px  solid #ff008e"
                onClick={() => {
                  navigate(Paths.signIn);
                  setSideBarOpen(false);
                }}
              >
                SIGN IN
              </SignUpButton>
              <SignUpButton
                bgColor="#ff008e"
                borderColor="transparent"
                onClick={() => {
                  navigate(Paths.signUp);
                  setSideBarOpen(false);
                }}
              >
                REGISTER
              </SignUpButton>
            </>
          )}
        </Styled.SideBarButtonWrapper>
      </Styled.SideBarContainer>
    </Styled.SideBarMainContainer>
  );
};

export default SideBar;
