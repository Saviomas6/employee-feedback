import {
  HomepageButtonWrapper,
  LeftContainer,
  LeftContainerDescription,
  LeftContainerHeading,
  MainContainer,
  RightContainer,
} from "../../style";
import Button from "../../../../components/button/Button";
import Lottie from "react-lottie";
import homepage from "../../../../assets/homepage.json";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/path";
const BannerSection = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homepage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainerHeading>Employee Feedback System</LeftContainerHeading>
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
        <Lottie options={defaultOptions} />
      </RightContainer>
    </MainContainer>
  );
};

export default BannerSection;
