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

const UserEmployeeFeedbackTopic = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading, isFetching } = useGetUserFeedbackTopic();
  return (
    <div>
      <Container>
        <Wrapper>
          <FeedbackTopicLayout>
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
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserEmployeeFeedbackTopic;
