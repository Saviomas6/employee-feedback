import { useNavigate } from "react-router-dom";
import {
  Container,
  FeedbackTopicContainer,
  FeedbackTopicLayout,
  FeedbackTopicText,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";
import { useGetUserAnnouncement } from "../../../logic/reactQuery/query/useGetAnnouncement";
import EmptyFound from "../../../components/emptyFound/EmptyFound";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";

const UserAnnouncementTopic = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading, isFetching } = useGetUserAnnouncement();
  return (
    <div>
      <Container>
        <Wrapper>
          <FeedbackTopicLayout dataLength={data?.length === 0}>
            {!isLoading &&
              !isFetching &&
              data?.map((topic, i) => (
                <OpacityAnimation
                  key={i}
                  onClick={() =>
                    navigate(`/user-announcement-topic/${topic?._id}`)
                  }
                >
                  <FeedbackTopicContainer>
                    <FeedbackTopicText>
                      {topic?.announcementHeading}
                    </FeedbackTopicText>
                  </FeedbackTopicContainer>
                </OpacityAnimation>
              ))}
          </FeedbackTopicLayout>
          {isLoading && !isError && isFetching && <LoadingSpinner />}
          {!isLoading && !isError && !isFetching && data?.length === 0 && (
            <EmptyFound
              heading="No Announcement Found!"
              description="You don't have any announcement right now."
            />
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserAnnouncementTopic;
