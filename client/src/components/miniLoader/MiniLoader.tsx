import Lottie from "react-lottie";
import loading from "../../assets/loading.json";
import { LoadingSpinnerContainer, LoadingSpinnerMainContainer } from "./style";

const MiniLoader = () => {
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <LoadingSpinnerMainContainer>
      <LoadingSpinnerContainer>
        <Lottie options={defaultErrorOptions} />
      </LoadingSpinnerContainer>
    </LoadingSpinnerMainContainer>
  );
};

export default MiniLoader;
