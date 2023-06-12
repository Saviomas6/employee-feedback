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
  heading: string;
  description: string;
  handleCloseModal(): void;
}
const SuccessModal = ({
  isLoading,
  heading,
  description,
  handleCloseModal,
}: I_Props) => {
  return (
    <SharedModal
      isLoading={isLoading}
      onClickClose={handleCloseModal}
      bgColor="rgba(0,0,0,0.7)"
    >
      <div>
        {isLoading ? (
          <MiniLoader />
        ) : (
          <>
            <ModalHeading>{heading}</ModalHeading>
            <ModalDescription>{description}</ModalDescription>
            <ModalButtonWrapper>
              <Button text="Close" onClick={handleCloseModal} />
            </ModalButtonWrapper>
          </>
        )}
      </div>
    </SharedModal>
  );
};

export default SuccessModal;
