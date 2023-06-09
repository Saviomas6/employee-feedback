import {
  Container,
  DummyContainer,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";

const AdminAnnouncement = () => {
  return (
    <Container>
      <Wrapper>
        <OpacityAnimation>
          <DummyContainer>Admin Announcement</DummyContainer>
        </OpacityAnimation>
      </Wrapper>
    </Container>
  );
};

export default AdminAnnouncement;
