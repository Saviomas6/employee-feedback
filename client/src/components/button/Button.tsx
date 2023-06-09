import { LoadingContainer, SharedButton } from "./style";
import whiteLoading from "../../assets/whiteLoader.json";
import Lottie from "react-lottie";
interface I_Props {
  text: string;
  onClick?: any;
  type?: string;
  disabled?: boolean;
  isLoading?: boolean;
}
const Button = ({ text, onClick, type, disabled, isLoading }: I_Props) => {
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: whiteLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <SharedButton disabled={disabled} type={type} onClick={onClick}>
      {isLoading ? (
        <LoadingContainer>
          <Lottie options={defaultErrorOptions} />
        </LoadingContainer>
      ) : (
        text
      )}
    </SharedButton>
  );
};

export default Button;
