import Lottie from "react-lottie";
import {
  ModalDescription,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import SharedModal from "../../SharedModal";
import {
  ErrorModalLottieContainer,
  ErrorModalLottieMainContainer,
} from "./style";
import error from "../../../../assets/error.json";
interface I_Props {
  handleCloseModal(): void;
  heading: string;
  description: string;
}
const ErrorModal = ({ handleCloseModal, heading, description }: I_Props) => {
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <SharedModal onClickClose={handleCloseModal} bgColor="rgba(0,0,0,0.7)">
        <>
          <ModalHeading>{heading}</ModalHeading>
          <ErrorModalLottieMainContainer>
            <ErrorModalLottieContainer>
              <Lottie options={defaultErrorOptions} />
            </ErrorModalLottieContainer>
          </ErrorModalLottieMainContainer>

          <ModalDescription>{description}</ModalDescription>
        </>
      </SharedModal>
    </div>
  );
};

export default ErrorModal;
