import {
  Container,
  FeedbackTopicContainer,
  FeedbackTopicLayout,
  FeedbackTopicText,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";
import { useGetUserFeedbackTopic } from "../../../logic/reactQuery/query/useGetUserFeedBackTopic";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import EmptyFound from "../../../components/emptyFound/EmptyFound";

const UserEmployeeFeedbackTopic = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading, isFetching } = useGetUserFeedbackTopic();
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
                    navigate(
                      `/user-employee-feedback-topic/${topic?.topicValue}`
                    )
                  }
                >
                  <FeedbackTopicContainer>
                    <FeedbackTopicText>{topic?.topicName}</FeedbackTopicText>
                  </FeedbackTopicContainer>
                </OpacityAnimation>
              ))}
          </FeedbackTopicLayout>
          {isLoading && !isError && isFetching && <LoadingSpinner />}
          {!isLoading && !isError && !isFetching && data?.length === 0 && (
            <EmptyFound
              heading="No Feedback Found!"
              description="You don't have any feedback right now."
            />
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserEmployeeFeedbackTopic;
