import * as Styled from "./style";
import notFound from "../../assets/notFound.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import { OpacityAnimation } from "../../styles/sharedStyles";
import Button from "../button/Button";

const NotFound = () => {
  const navigate = useNavigate();
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
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
        <Styled.Heading>404 - PAGE NOT FOUND</Styled.Heading>
        <Styled.Description>
          The page you are looking for might been removed.
        </Styled.Description>
        <Styled.NotFoundImageMainContainer>
          <Button text="HOMEPAGE" onClick={() => navigate("/")} />
        </Styled.NotFoundImageMainContainer>
      </Styled.NotFoundMainContainer>
    </OpacityAnimation>
  );
};

export default NotFound;
