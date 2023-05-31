import { RxAvatar } from "react-icons/rx";
import { ModalHeading } from "../../../../styles/sharedStyles";
import SharedModal from "../../SharedModal";
import { AvatarProfile, LogoutModalContainer, ProfileName } from "./style";
import Button from "../../../button/Button";

interface I_Props {
  setLogoutModalClose(value: boolean): void;
}

const LogoutModal = ({ setLogoutModalClose }: I_Props) => {
  const handleCloseModal = () => {
    setLogoutModalClose(false);
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
        <ProfileName>Savio Mascarenhas Francis</ProfileName>
        <LogoutModalContainer>
          <Button text="Sign out" />
        </LogoutModalContainer>
      </>
    </SharedModal>
  );
};

export default LogoutModal;
