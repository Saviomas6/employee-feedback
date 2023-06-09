import Lottie from "react-lottie";
import {
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyles";
import homepage from "../../assets/homepage.json";
import {
  HomepageCardContainer,
  HomepageCardHeading,
  LeftContainer,
  LeftContainerDescription,
  LeftContainerHeading,
  MainContainer,
  RightContainer,
} from "./style";
import HomePageCard from "../../components/homepageCard/HomePageCard";

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
          <HomepageCardHeading>Easy Steps</HomepageCardHeading>
          <HomepageCardContainer>
            <HomePageCard
              color="grey"
              title="Register"
              description="To get started on our platform, you need to register an account. The registration process is quick and easy. Simply click on the Register button located at the top right corner of the homepage."
            />
            <HomePageCard
              color="green"
              title="Sign In"
              description="After successfully registering your account, you can now sign in to access the full features of our platform. On the homepage, locate the Sign In button and click on it."
            />{" "}
            <HomePageCard
              color="#b269e8"
              title="Feedback"
              description="We value your feedback and want to hear from you! Once you've signed in, you can provide feedback on your experience using our platform."
            />
          </HomepageCardContainer>
        </Wrapper>
      </Container>
    </OpacityAnimation>
  );
};

export default HomeSection;
