import { useParams } from "react-router-dom";
import {
  AnnouncementDescription,
  AnnouncementDescriptionContainer,
  AnnouncementHeading,
  AnnouncementHeadingContainer,
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";
import { useGetUserAnnouncementById } from "../../../logic/reactQuery/query/useGetUserAnnouncementById";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";

const UserAnnouncement = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isError }: any =
    useGetUserAnnouncementById(id);

  return (
    <Container>
      {isLoading || (isFetching && <LoadingSpinner height="100vh" />)}
      {!isLoading && !isFetching && !isError && (
        <Wrapper>
          <OpacityAnimation>
            <AnnouncementHeadingContainer>
              <AnnouncementHeading>
                <span>Subject : </span> {data[0]?.announcementHeading}
              </AnnouncementHeading>
            </AnnouncementHeadingContainer>
            <AnnouncementDescriptionContainer>
              <AnnouncementDescription>
                <span>Announcement :</span> {data[0]?.announcementDescription}
              </AnnouncementDescription>
            </AnnouncementDescriptionContainer>
            <AnnouncementDescriptionContainer>
              <AnnouncementDescription>
                <span>Announcement Summary : </span>
                {data[0]?.announcementSummary}
              </AnnouncementDescription>
            </AnnouncementDescriptionContainer>
          </OpacityAnimation>
        </Wrapper>
      )}
    </Container>
  );
};

export default UserAnnouncement;
