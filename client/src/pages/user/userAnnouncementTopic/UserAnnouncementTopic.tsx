import {
  Container,
  DummyContainer,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";

const UserAnnouncementTopic = () => {
  return (
    <Container>
      <Wrapper>
        <OpacityAnimation>
          <DummyContainer>User Announcement Topic</DummyContainer>
        </OpacityAnimation>
      </Wrapper>
    </Container>
  );
};

export default UserAnnouncementTopic;
