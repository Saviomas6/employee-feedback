import Lottie from "react-lottie";
import loading from "../../assets/loading.json";
import { LoadingSpinnerContainer, LoadingSpinnerMainContainer } from "./style";
interface I_Props {
  height?: string;
}
const LoadingSpinner = ({ height }: I_Props) => {
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <LoadingSpinnerMainContainer height={height}>
      <LoadingSpinnerContainer>
        <Lottie options={defaultErrorOptions} />
      </LoadingSpinnerContainer>
    </LoadingSpinnerMainContainer>
  );
};

export default LoadingSpinner;
