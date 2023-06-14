import SharedModal from "../../SharedModal";
import {
  ModalButtonWrapper,
  ModalDescription,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import Button from "../../../button/Button";
import MiniLoader from "../../../miniLoader/MiniLoader";
import success from "../../../../assets/success.json";
import Lottie from "react-lottie";
import {
  SuccessModalLottieContainer,
  SuccessModalLottieMainContainer,
} from "./style";
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
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
            <SuccessModalLottieMainContainer>
              <SuccessModalLottieContainer>
                <Lottie options={defaultErrorOptions} />
              </SuccessModalLottieContainer>
            </SuccessModalLottieMainContainer>
            <ModalDescription>{description}</ModalDescription>
          </>
        )}
      </div>
    </SharedModal>
  );
};

export default SuccessModal;
