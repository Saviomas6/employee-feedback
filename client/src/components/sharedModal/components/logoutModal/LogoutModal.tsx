import { RxAvatar } from "react-icons/rx";
import { ModalHeading } from "../../../../styles/sharedStyles";
import SharedModal from "../../SharedModal";
import { AvatarProfile, LogoutModalContainer, ProfileName } from "./style";
import Button from "../../../button/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../logic/redux/store/hooks";
import {
  setLoggedDetail,
  setLoggedIn,
} from "../../../../logic/redux/action/action";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/path";
import { googleLogout } from "@react-oauth/google";

interface I_Props {
  setLogoutModalClose(value: boolean): void;
}

const LogoutModal = ({ setLogoutModalClose }: I_Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  const handleCloseModal = () => {
    setLogoutModalClose(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    dispatch(setLoggedIn(false));
    googleLogout();
    dispatch(setLoggedDetail([]));
    setLogoutModalClose(false);
    navigate(Paths.home);
  };

  return (
    <SharedModal onClickClose={handleCloseModal} bgColor="rgba(0,0,0,0.7)">
      <>
        <ModalHeading>Logout</ModalHeading>
        <LogoutModalContainer>
          <AvatarProfile>
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
              <RxAvatar size="50" color="#fff" />
            )}
          </AvatarProfile>
        </LogoutModalContainer>
        <ProfileName>{isLoggedDetail[0]?.name}</ProfileName>
        <LogoutModalContainer>
          <Button text="Sign out" onClick={handleLogout} />
        </LogoutModalContainer>
      </>
    </SharedModal>
  );
};

export default LogoutModal;
