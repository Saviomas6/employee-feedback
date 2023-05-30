import SharedModal from "../../SharedModal";
import {
  ModalButtonWrapper,
  ModalDescription,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import Button from "../../../button/Button";
interface I_Props {
  isLoading: boolean;
  setSuccessModal(value: boolean): void;
}
const SuccessModal = ({ isLoading, setSuccessModal }: I_Props) => {
  const handleCloseModal = () => {
    setSuccessModal(false);
  };
  return (
    <SharedModal isLoading={isLoading} onClickClose={handleCloseModal}>
      <div>
        {isLoading ? (
          <ModalHeading>Loading...</ModalHeading>
        ) : (
          <>
            <ModalHeading>Success</ModalHeading>
            <ModalDescription>
              Thank you for taking time to provide feedback. We appreciate
              hearing from you and will review your comments carefully.
            </ModalDescription>
            <ModalButtonWrapper>
              <Button text="Close" onClick={() => setSuccessModal(false)} />
            </ModalButtonWrapper>
          </>
        )}
      </div>
    </SharedModal>
  );
};

export default SuccessModal;
