import {
  Container,
  DummyContainer,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";

const UserProjectFeedback = () => {
  return (
    <Container width="90%">
      <Wrapper>
        <OpacityAnimation>
          <DummyContainer>User Project Feedback</DummyContainer>
        </OpacityAnimation>
      </Wrapper>
    </Container>
  );
};

export default UserProjectFeedback;
