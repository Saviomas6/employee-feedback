import { useParams } from "react-router-dom";
import {
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";
import { useGetUserAnnouncementById } from "../../../logic/reactQuery/query/useGetUserAnnouncementById";
import {
  AnnouncementDescription,
  AnnouncementDescriptionContainer,
  AnnouncementHeading,
  AnnouncementHeadingContainer,
} from "../../../styles/sharedStyles";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";

const AdminAnnouncement = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isError }: any =
    useGetUserAnnouncementById(id);

  return (
    <Container width="90%">
      {isLoading && <LoadingSpinner />}
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
                <span>Announcement Summary : </span>{" "}
                {data[0]?.announcementSummary}
              </AnnouncementDescription>
            </AnnouncementDescriptionContainer>
          </OpacityAnimation>
        </Wrapper>
      )}
    </Container>
  );
};

export default AdminAnnouncement;
