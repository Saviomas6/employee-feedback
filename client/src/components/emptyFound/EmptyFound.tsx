import { styled } from "styled-components";
import empty from "../../assets/empty.json";
import Lottie from "react-lottie";
import { OpacityAnimation } from "../../styles/sharedStyles";

const EmptyFound = () => {
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: empty,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <OpacityAnimation>
      <NotFoundMainContainer>
        <NotFoundImageMainContainer>
          <NotFoundImageContainer>
            <Lottie options={defaultErrorOptions} />
          </NotFoundImageContainer>
        </NotFoundImageMainContainer>
        <Heading>No Feedback Found!</Heading>
        <Description>You don't have any feedback right now.</Description>
      </NotFoundMainContainer>
    </OpacityAnimation>
  );
};

export default EmptyFound;

const NotFoundMainContainer = styled.div``;
const NotFoundImageMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NotFoundImageContainer = styled.div`
  height: 350px;
  width: 350px;
`;
export const Heading = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 40px;
`;
export const Description = styled.div`
  color: #fff;
  text-align: center;
  font-size: 22px;
  margin: 20px 0;
`;