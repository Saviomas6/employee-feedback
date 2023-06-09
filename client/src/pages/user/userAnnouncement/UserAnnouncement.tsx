import {
  Container,
  DummyContainer,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";

const UserAnnouncement = () => {
  return (
    <Container>
      <Wrapper>
        <OpacityAnimation>
          <DummyContainer>User Announcement</DummyContainer>
        </OpacityAnimation>
      </Wrapper>
    </Container>
  );
};

export default UserAnnouncement;
