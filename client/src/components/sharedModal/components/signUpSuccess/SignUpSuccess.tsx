import SharedModal from "../../SharedModal";
import {
  ModalButtonWrapper,
  ModalDescription,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import Button from "../../../button/Button";
import MiniLoader from "../../../miniLoader/MiniLoader";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/path";
interface I_Props {
  isLoading: boolean;
}
const SignUpSuccess = ({ isLoading }: I_Props) => {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate(Paths.home);
  };
  return (
    <SharedModal
      onClickClose={handleCloseModal}
      isLoading={isLoading}
      bgColor="rgba(0,0,0,0.7)"
    >
      <div>
        {isLoading ? (
          <MiniLoader />
        ) : (
          <>
            <ModalHeading>Success</ModalHeading>
            <ModalDescription>
              Congratulations, your account has been successfully created
            </ModalDescription>
            <ModalButtonWrapper>
              <Button text="Close" onClick={() => navigate(Paths.home)} />
            </ModalButtonWrapper>
          </>
        )}
      </div>
    </SharedModal>
  );
};

export default SignUpSuccess;
