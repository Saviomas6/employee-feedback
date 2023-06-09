import { RxAvatar } from "react-icons/rx";
import { ModalHeading } from "../../../../styles/sharedStyles";
import SharedModal from "../../SharedModal";
import { AvatarProfile, LogoutModalContainer, ProfileName } from "./style";
import Button from "../../../button/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../logic/redux/store/hooks";
import { setLoggedIn } from "../../../../logic/redux/action/action";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/path";

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
    setLogoutModalClose(false);
    navigate(Paths.home);
  };

  return (
    <SharedModal onClickClose={handleCloseModal}>
      <>
        <ModalHeading>Logout</ModalHeading>
        <LogoutModalContainer>
          <AvatarProfile>
            <RxAvatar size="50" color="#fff" />
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
