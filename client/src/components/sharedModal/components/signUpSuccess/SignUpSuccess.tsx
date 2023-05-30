import SharedModal from "../../SharedModal";
import {
  ModalButtonWrapper,
  ModalDescription,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import Button from "../../../button/Button";
interface I_Props {
  isLoading: boolean;
  setSignUpSuccessModal(value: boolean): void;
}
const SignUpSuccess = ({ isLoading, setSignUpSuccessModal }: I_Props) => {
  return (
    <SharedModal toggleModal={setSignUpSuccessModal} isLoading={isLoading}>
      <div>
        {isLoading ? (
          <ModalHeading>Loading...</ModalHeading>
        ) : (
          <>
            <ModalHeading>Success</ModalHeading>
            <ModalDescription>
              Congratulations, your account has been successfully created
            </ModalDescription>
            <ModalButtonWrapper>
              <Button
                text="Close"
                onClick={() => setSignUpSuccessModal(false)}
              />
            </ModalButtonWrapper>
          </>
        )}
      </div>
    </SharedModal>
  );
};

export default SignUpSuccess;
