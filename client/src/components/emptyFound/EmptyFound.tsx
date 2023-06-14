import * as Styled from "./style";
import empty from "../../assets/empty.json";
import Lottie from "react-lottie";
import { OpacityAnimation } from "../../styles/sharedStyles";
interface I_Props {
  heading: string;
  description: string;
}
const EmptyFound = ({ heading, description }: I_Props) => {
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
      <Styled.NotFoundMainContainer>
        <Styled.NotFoundImageMainContainer>
          <Styled.NotFoundImageContainer>
            <Lottie options={defaultErrorOptions} />
          </Styled.NotFoundImageContainer>
        </Styled.NotFoundImageMainContainer>
        <Styled.Heading>{heading}</Styled.Heading>
        <Styled.Description>{description}</Styled.Description>
      </Styled.NotFoundMainContainer>
    </OpacityAnimation>
  );
};

export default EmptyFound;
