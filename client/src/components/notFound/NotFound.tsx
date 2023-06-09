import { styled } from "styled-components";
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
      <NotFoundMainContainer>
        <NotFoundImageMainContainer>
          <NotFoundImageContainer>
            <Lottie options={defaultErrorOptions} />
          </NotFoundImageContainer>
        </NotFoundImageMainContainer>
        <Heading>404 - PAGE NOT FOUND</Heading>
        <Description>
          The page you are looking for might been removed.
        </Description>
        <NotFoundImageMainContainer>
          <Button text="HOMEPAGE" onClick={() => navigate("/")} />
        </NotFoundImageMainContainer>
      </NotFoundMainContainer>
    </OpacityAnimation>
  );
};

export default NotFound;
const NotFoundMainContainer = styled.div``;
const NotFoundImageMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
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
