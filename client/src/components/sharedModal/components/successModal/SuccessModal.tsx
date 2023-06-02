import SharedModal from "../../SharedModal";
import {
  ModalButtonWrapper,
  ModalDescription,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import Button from "../../../button/Button";
import MiniLoader from "../../../miniLoader/MiniLoader";
interface I_Props {
  isLoading: boolean;
  setSuccessModal(value: boolean): void;
  heading: string;
  description: string;
}
const SuccessModal = ({
  isLoading,
  setSuccessModal,
  heading,
  description,
}: I_Props) => {
  const handleCloseModal = () => {
    setSuccessModal(false);
  };
  return (
    <SharedModal isLoading={isLoading} onClickClose={handleCloseModal}>
      <div>
        {isLoading ? (
          <MiniLoader />
        ) : (
          <>
            <ModalHeading>{heading}</ModalHeading>
            <ModalDescription>{description}</ModalDescription>
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
