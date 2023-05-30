import Lottie from "react-lottie";
import { OpacityAnimation } from "../../styles/sharedStyles";
import homepage from "../../assets/homepage.json";
import { LeftContainer, MainContainer, RightContainer } from "./style";

const HomeSection = () => {
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: homepage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <OpacityAnimation style={{ backgroundColor: "red" }}>
      <MainContainer>
        <LeftContainer>Left</LeftContainer>
        <RightContainer>
          <Lottie options={defaultErrorOptions} />
        </RightContainer>
      </MainContainer>
    </OpacityAnimation>
  );
};

export default HomeSection;
