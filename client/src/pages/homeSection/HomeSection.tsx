import Lottie from "react-lottie";
import {
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyles";
import homepage from "../../assets/homepage.json";
import {
  HomepageButtonWrapper,
  HomepageCardContainer,
  HomepageCardHeading,
  LeftContainer,
  LeftContainerDescription,
  LeftContainerHeading,
  MainContainer,
  RightContainer,
} from "./style";
import HomePageCard from "../../components/homepageCard/HomePageCard";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/path";

const HomeSection = () => {
  const navigate = useNavigate();
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

              <HomepageButtonWrapper>
                <Button
                  text="Get Started"
                  onClick={() => navigate(Paths.userEmployeeFeedbackTopic)}
                />
              </HomepageButtonWrapper>
            </LeftContainer>
            <RightContainer>
              <Lottie options={defaultErrorOptions} />
            </RightContainer>
          </MainContainer>
          <HomepageCardHeading>Easy Steps</HomepageCardHeading>
          <HomepageCardContainer>
            <HomePageCard
              color="#ff008e"
              title="Register"
              description="To get started on our platform, you need to register an account. The registration process is quick and easy. Simply click on the Register button located at the top right corner of the homepage."
            />
            <HomePageCard
              color="#ff008e"
              title="Sign In"
              description="After successfully registering your account, you can now sign in to access the full features of our platform. On the homepage, locate the Sign In button and click on it."
            />{" "}
            <HomePageCard
              color="#ff008e"
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
