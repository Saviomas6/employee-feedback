import {
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyles";
import BannerSection from "./components/bannerSection/BannerSection";
import EasyStepSection from "./components/easyStepSection/EasyStepSection";
import VisionSection from "./components/visionSection/VisionSection";

const HomeSection = () => {
  return (
    <OpacityAnimation>
      <Container width="90%">
        <Wrapper>
          <BannerSection />
          <EasyStepSection />
          <VisionSection />
        </Wrapper>
      </Container>
    </OpacityAnimation>
  );
};

export default HomeSection;
