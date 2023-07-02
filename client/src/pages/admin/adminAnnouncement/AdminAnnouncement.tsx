import { useNavigate, useParams } from "react-router-dom";
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
import { Paths } from "../../../routes/path";
import {useEffect} from "react"
import { useAppSelector } from "../../../logic/redux/store/hooks";
const AdminAnnouncement = () => {
  const navigate=useNavigate()
  const { id } = useParams();
  const { data, isLoading, isFetching, isError }: any =
    useGetUserAnnouncementById(id);
    const isLoggedDetail = useAppSelector(
      (state) => state.userReducer.isLoggedDetail
    );


    useEffect(() => {
      if (!isLoggedDetail[0]?.isAdmin) {
        navigate(Paths.home);
      }
    }, [isLoggedDetail]);

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
