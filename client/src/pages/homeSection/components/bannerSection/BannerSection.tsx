import * as Styled from "../../style";
import Button from "../../../../components/button/Button";
import Lottie from "react-lottie";
import homepage from "../../../../assets/homepage.json";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../logic/redux/store/hooks";
const BannerSection = () => {
  const navigate = useNavigate();
  const isLoggedDetail: any = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homepage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Styled.MainContainer>
      <Styled.LeftContainer>
        <Styled.LeftContainerHeading>
          Employee Feedback System
        </Styled.LeftContainerHeading>
        <Styled.LeftContainerDescription>
          Creating Ways for Employees to Share and Receive Feedback
        </Styled.LeftContainerDescription>

        <Styled.HomepageButtonWrapper>
          <Button
            text="Get Started"
            onClick={() =>
              navigate(
                isLoggedDetail[0]?.isAdmin
                  ? "/admin-employee-feedback-topic"
                  : "/user-employee-feedback-topic"
              )
            }
          />
        </Styled.HomepageButtonWrapper>
      </Styled.LeftContainer>
      <Styled.HomePageRightMainContainer>
        <Styled.RightContainer>
          <Lottie options={defaultOptions} />
        </Styled.RightContainer>
      </Styled.HomePageRightMainContainer>
    </Styled.MainContainer>
  );
};

export default BannerSection;
