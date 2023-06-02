import {
  Container,
  FeedbackTopicContainer,
  FeedbackTopicLayout,
  FeedbackTopicText,
  OpacityAnimation,
  StyledLink,
  Wrapper,
} from "../../styles/sharedStyles";
import { useGetUserFeedbackTopic } from "../../logic/reactQuery/query/useGetUserFeedBackTopic";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

const FeedBackTopic = () => {
  const { data, isError, isLoading, isFetching } = useGetUserFeedbackTopic();

  return (
    <div>
      <Container>
        <Wrapper>
          <FeedbackTopicLayout>
            {!isLoading &&
              !isFetching &&
              data?.map((topic, i) => (
                <StyledLink to={`/feedbackTopic/${topic?.topicValue}`}>
                  <OpacityAnimation>
                    <FeedbackTopicContainer key={i}>
                      <FeedbackTopicText>{topic?.topicName}</FeedbackTopicText>
                    </FeedbackTopicContainer>
                  </OpacityAnimation>
                </StyledLink>
              ))}
          </FeedbackTopicLayout>
          {isLoading && !isError && isFetching && <LoadingSpinner />}
        </Wrapper>
      </Container>
    </div>
  );
};

export default FeedBackTopic;
