import Lottie from "react-lottie";
import {
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyles";
import homepage from "../../assets/homepage.json";
import {
  LeftContainer,
  LeftContainerDescription,
  LeftContainerHeading,
  MainContainer,
  RightContainer,
} from "./style";

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
    <OpacityAnimation>
      <Container>
        <Wrapper>
          <MainContainer>
            <LeftContainer>
              <LeftContainerHeading>
                Employee Feedback System
              </LeftContainerHeading>
              <LeftContainerDescription>
                Creating Ways for Employees to Share and Receive Feedback
              </LeftContainerDescription>
            </LeftContainer>
            <RightContainer>
              <Lottie options={defaultErrorOptions} />
            </RightContainer>
          </MainContainer>
        </Wrapper>
      </Container>
    </OpacityAnimation>
  );
};

export default HomeSection;
